# 🏨 Hotel Recommendation Frontend (Next.js)

This is the **frontend application** for the AI-powered Hotel Recommendation & Booking System.

It allows users to:

* Search hotels using natural language
* View AI-ranked hotel recommendations
* View detailed hotel & room information
* Book rooms
* Generate user behaviour events for personalisation & analytics

The frontend is built with **Next.js App Router (v16+)** and connects to a Node.js + MySQL + Qdrant backend.

---

## 🚀 Tech Stack

* **Next.js 16+** (App Router)
* **React Server Components**
* **TypeScript**
* **Tailwind CSS**
* **Fetch API**
* **Environment-based backend integration**

---

## 📂 Project Structure

```
app/
 ├─ page.tsx                 # Search page
 ├─ hotels/
 │   └─ [id]/
 │       └─ page.tsx         # Hotel details page (dynamic route)
 ├─ booking/
 │   └─ page.tsx             # Booking form (optional extension)
lib/
 ├─ api.ts                   # Backend API wrapper
styles/
public/
```

---

## 🌍 Environment Setup

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

⚠️ **Important**

* Do NOT include `/api` in the base URL
* Restart the dev server after changing env values

---

## ▶️ Running the Project

```bash
npm install
npm run dev
```

The frontend will be available at:

```
http://localhost:3000
```

---

## 🔍 Search Flow

Users can search hotels using **natural language**:

Examples:

* `luxury vacation in Paris`
* `cheap and comfortable hotel`
* `family friendly resort with pool`

The frontend sends the query to:

```
POST /api/search
```

and renders AI-ranked results returned by the backend.

---

## 🏨 Hotel Details Page

Dynamic route:

```
/hotels/[id]
```

Example:

```
/hotels/73
```

This route:

* Fetches hotel details from backend
* Displays hotel information
* Lists available rooms
* Allows users to initiate booking

> Uses **Next.js dynamic route folders** (`[id]`)

---

## 🛏 Booking Flow

1. User selects a room
2. Frontend navigates to booking page
3. Booking data is submitted to backend
4. Booking confirmation is returned

Backend endpoint used:

```
POST /api/bookings
```

---

## 📊 User Events & Analytics

The frontend automatically generates user events such as:

* `search`
* `impression`
* `view_hotel`
* `start_booking`
* `booking_confirmed`

These events are sent to:

```
POST /api/events
```

This enables:

* Personalised recommendations
* A/B testing
* Conversion analytics
* AI ranking optimisation

---

## 🧠 AI-Powered Features (Backend Driven)

Although AI logic runs on the backend, the frontend benefits from:

* Semantic search (vector embeddings)
* Intent inference
* Hybrid ranking (semantic + filters + behaviour)
* Personalised results per user
* A/B tested ranking strategies

---

## ⚠️ Important Next.js Notes

### Dynamic Route Params (Next.js 16+)

In App Router, `params` is **async**.

Correct usage:

```ts
const { id } = await params;
```

Do **not** access `params.id` directly.

---

## 🧪 Common Issues

### ❌ Hotel fetch failed

* Check `.env.local`
* Ensure backend is running
* Ensure no double `/api/api` in fetch URL

### ❌ params Promise error

* Ensure you are awaiting `params` in dynamic routes

---

## 🛣 Roadmap (Frontend)

Planned or optional improvements:

* Booking confirmation page
* Loading skeletons
* Error boundaries
* Map-based hotel view
* User booking history
* Saved hotels / favourites
* SEO metadata per hotel

---

## 🏁 Summary

This frontend is designed to work seamlessly with an **AI-driven hotel recommendation backend**, focusing on:

* Clean UX
* Scalable architecture
* Behaviour-driven intelligence
* Modern Next.js best practices