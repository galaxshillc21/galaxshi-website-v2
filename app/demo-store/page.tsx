"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  sku: string;
  description: string;
  playfulCopy: string;
  category: string;
};

type CartItem = Product & {
  quantity: number;
};

type EventEntry = {
  name: string;
  timestamp: string;
  payload: Record<string, unknown>;
  channel: "dataLayer" | "skipped";
};

declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

const STORAGE_KEY = "galaxshi-demo-cart-v1";

const PRODUCTS: Product[] = [
  {
    id: "conversion-cookie",
    name: "The Conversion Cookie",
    price: 12,
    sku: "GAL-COOKIE-001",
    category: "demo-snacks",
    description: "A legendary cookie that claims every click can become revenue with proper tracking.",
    playfulCopy: "Best served with clean UTMs and a perfectly validated purchase event.",
  },
  {
    id: "datalayer-donut",
    name: "The DataLayer Donut",
    price: 15,
    sku: "GAL-DONUT-002",
    category: "demo-snacks",
    description: "A glazed donut engineered for event-rich journeys from product view to checkout.",
    playfulCopy: "Sprinkled with item_id, item_name, and enough structure to make analysts smile.",
  },
];

export default function DemoStorePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [events, setEvents] = useState<EventEntry[]>([]);
  const [step, setStep] = useState<"list" | "cart" | "checkout" | "confirmation">("list");
  const [orderId, setOrderId] = useState<string>("");
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: "Anonymous",
    email: "anonymous@example.com",
    company: "Galaxshi",
  });

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as CartItem[];
        setCart(parsed);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    emitEvent("view_item_list", {
      ecommerce: {
        item_list_name: "demo_store",
        items: PRODUCTS.map((product) => ({
          item_id: product.sku,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
        })),
      },
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  function emitEvent(name: string, payload: Record<string, unknown>) {
    if (typeof window === "undefined") {
      return;
    }

    let channel: EventEntry["channel"] = "skipped";

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...payload });
      channel = "dataLayer";
    }

    const nextEvent: EventEntry = {
      name,
      payload,
      channel,
      timestamp: new Date().toLocaleTimeString(),
    };

    setEvents((current) => [nextEvent, ...current].slice(0, 14));
  }

  function openProduct(product: Product) {
    setSelectedProduct(product);

    emitEvent("select_item", {
      ecommerce: {
        item_list_name: "demo_store",
        items: [{ item_id: product.sku, item_name: product.name, price: product.price }],
      },
    });

    emitEvent("view_item", {
      ecommerce: {
        currency: "USD",
        value: product.price,
        items: [
          {
            item_id: product.sku,
            item_name: product.name,
            item_category: product.category,
            price: product.price,
            quantity: 1,
          },
        ],
      },
    });
  }

  function addToCart(product: Product) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) {
        return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }

      return [...current, { ...product, quantity: 1 }];
    });

    emitEvent("add_to_cart", {
      ecommerce: {
        currency: "USD",
        value: product.price,
        items: [
          {
            item_id: product.sku,
            item_name: product.name,
            item_category: product.category,
            price: product.price,
            quantity: 1,
          },
        ],
      },
    });
  }

  function removeFromCart(item: CartItem) {
    setCart((current) => current.filter((cartItem) => cartItem.id !== item.id));

    emitEvent("remove_from_cart", {
      ecommerce: {
        currency: "USD",
        value: item.price * item.quantity,
        items: [
          {
            item_id: item.sku,
            item_name: item.name,
            item_category: item.category,
            price: item.price,
            quantity: item.quantity,
          },
        ],
      },
    });
  }

  function goToCart() {
    setStep("cart");
    emitEvent("view_cart", {
      ecommerce: {
        currency: "USD",
        value: subtotal,
        items: cart.map((item) => ({
          item_id: item.sku,
          item_name: item.name,
          item_category: item.category,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    });
  }

  function beginCheckout() {
    setStep("checkout");
    emitEvent("begin_checkout", {
      ecommerce: {
        currency: "USD",
        value: subtotal,
        items: cart.map((item) => ({
          item_id: item.sku,
          item_name: item.name,
          item_category: item.category,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    });
  }

  function completeFakePurchase(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!checkoutForm.fullName || !checkoutForm.email) {
      return;
    }

    const newOrderId = `GAL-${Date.now().toString().slice(-6)}`;

    emitEvent("purchase", {
      ecommerce: {
        transaction_id: newOrderId,
        currency: "USD",
        value: subtotal,
        items: cart.map((item) => ({
          item_id: item.sku,
          item_name: item.name,
          item_category: item.category,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    });

    setOrderId(newOrderId);
    setCart([]);
    setStep("confirmation");
    setCheckoutForm({ fullName: "", email: "", company: "" });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-cyan-400/40 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-900/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Analytics Demo Store</h1>
            <Link href="/" className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200">
              Back to homepage
            </Link>
          </div>

          <p className="max-w-3xl text-slate-300">This is a controlled analytics sandbox. No real payment occurs and all actions exist to demonstrate event design for GA4 and GTM.</p>

          <div className="flex flex-wrap gap-3 text-sm">
            <button type="button" onClick={() => setStep("list")} className="rounded-md bg-slate-800 px-3 py-2 font-medium text-slate-200 transition hover:bg-slate-700">
              Products
            </button>
            <button type="button" onClick={goToCart} className="rounded-md bg-cyan-500 px-3 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
              Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            {step === "list" && (
              <div className="grid gap-5 sm:grid-cols-2">
                {PRODUCTS.map((product) => (
                  <article key={product.id} className="rounded-xl border border-slate-700 bg-slate-800/80 p-5 transition hover:border-cyan-400/60">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">SKU {product.sku}</p>
                    <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
                    <p className="mb-3 text-sm text-slate-300">{product.description}</p>
                    <p className="mb-5 text-xs text-slate-400">{product.playfulCopy}</p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-lg font-semibold">${product.price}</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => openProduct(product)} className="rounded-md border border-slate-600 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300">
                          Details
                        </button>
                        <button type="button" onClick={() => addToCart(product)} className="rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {step === "cart" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Mini Cart</h2>
                {cart.length === 0 ? (
                  <p className="text-slate-300">Your cart is empty. Add one of the two demo products to continue.</p>
                ) : (
                  <>
                    <ul className="space-y-3">
                      {cart.map((item) => (
                        <li key={item.id} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-4">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-slate-400">
                              Qty {item.quantity} x ${item.price}
                            </p>
                          </div>
                          <button type="button" onClick={() => removeFromCart(item)} className="rounded-md border border-rose-400/70 px-3 py-2 text-sm text-rose-200 transition hover:bg-rose-500/10">
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-800 p-4">
                      <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
                      <button type="button" onClick={beginCheckout} className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
                        Begin fake checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {step === "checkout" && (
              <form onSubmit={completeFakePurchase} className="space-y-4">
                <h2 className="text-2xl font-semibold">Fake Checkout</h2>
                <p className="text-sm text-slate-300">This form is simulation only. No card data is requested and no charge is made.</p>

                <label className="block text-sm font-medium text-slate-200" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  value={checkoutForm.fullName}
                  onChange={(event) => setCheckoutForm((current) => ({ ...current, fullName: event.target.value }))}
                  required
                  className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 outline-none ring-cyan-300 transition focus:ring"
                />

                <label className="block text-sm font-medium text-slate-200" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  value={checkoutForm.email}
                  onChange={(event) => setCheckoutForm((current) => ({ ...current, email: event.target.value }))}
                  required
                  className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 outline-none ring-cyan-300 transition focus:ring"
                />

                <label className="block text-sm font-medium text-slate-200" htmlFor="company">
                  Company (optional)
                </label>
                <input id="company" value={checkoutForm.company} onChange={(event) => setCheckoutForm((current) => ({ ...current, company: event.target.value }))} className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 outline-none ring-cyan-300 transition focus:ring" />

                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4 text-sm text-slate-300">
                  Demo total: <span className="font-semibold text-slate-100">${subtotal.toFixed(2)}</span>
                </div>

                <button type="submit" className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Place fake order
                </button>
              </form>
            )}

            {step === "confirmation" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-emerald-300">Fake order confirmed</h2>
                <p className="text-slate-300">
                  Order <span className="font-semibold text-slate-100">{orderId}</span> has been generated for analytics demonstration.
                </p>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep("list")} className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
                    Shop demo products again
                  </button>
                  <button type="button" onClick={goToCart} className="rounded-md border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-cyan-300">
                    View cart
                  </button>
                </div>
              </div>
            )}
          </section>

          <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">Live Event Feed</h2>
              <button type="button" onClick={() => setEvents([])} className="rounded-md border border-slate-600 px-2 py-1 text-xs text-slate-200 transition hover:border-cyan-300">
                Clear
              </button>
            </div>

            {events.length === 0 ? (
              <p className="text-sm text-slate-400">No events yet. Interact with the store to emit events.</p>
            ) : (
              <ul className="space-y-2">
                {events.map((entry, index) => (
                  <li key={`${entry.name}-${entry.timestamp}-${index}`} className="rounded-md border border-slate-700 bg-slate-800 p-3">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-cyan-300">{entry.name}</p>
                      <span className="text-xs text-slate-400">{entry.timestamp}</span>
                    </div>
                    <p className="mb-2 text-xs text-slate-400">channel: {entry.channel}</p>
                    <pre className="overflow-x-auto text-[11px] text-slate-300">{JSON.stringify(entry.payload, null, 2)}</pre>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      </div>

      {selectedProduct ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">SKU {selectedProduct.sku}</p>
            <h2 className="mb-2 text-2xl font-semibold">{selectedProduct.name}</h2>
            <p className="mb-3 text-slate-300">{selectedProduct.description}</p>
            <p className="mb-5 text-sm text-slate-400">{selectedProduct.playfulCopy}</p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => addToCart(selectedProduct)} className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
                Add to cart
              </button>
              <button type="button" onClick={() => setSelectedProduct(null)} className="rounded-md border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-cyan-300">
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
