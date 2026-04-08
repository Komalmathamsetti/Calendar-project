# 📅 Interactive Wall Calendar (Frontend Engineering Challenge)

A modern, responsive **wall calendar web application** built using **Next.js and React**, inspired by a physical calendar design.
This project focuses on clean UI, smooth interactions, and a great user experience.

---

## 🌐 Live Demo

👉 https://calendar-project-one.vercel.app/

---

## 🚀 Features

### 📆 Calendar UI

* Clean **wall calendar-inspired layout**
* Displays **only current month dates**
* Proper weekday alignment (Sun–Sat)

### 🎯 Date Range Selection

* Select **start and end dates**
* Highlights:

  * Start date
  * End date
  * Dates in between
* Smooth visual feedback

### 🖼 Dynamic Hero Images (NEW ✨)

* Each month displays a **different background image**
* Automatically updates when navigating months
* Smooth transition effect between images

### 📝 Notes Section

* Add notes for each month
* Data stored using **localStorage**
* Persistent across reloads

### 🔁 Month Navigation

* Navigate between months using arrow controls
* Instant UI updates

### 📱 Fully Responsive

* Desktop: side-by-side layout
* Mobile: stacked layout
* Works smoothly on all screen sizes

---

## 🛠 Tech Stack

* **Framework:** Next.js (App Router)
* **Library:** React.js
* **Styling:** Tailwind CSS
* **Date Handling:** date-fns
* **Deployment:** Vercel

---

## 📂 Project Structure

```id="n9h3a1"
src/
  app/
    page.js
  components/
    Calendar.jsx
    DayCell.jsx
    HeaderImage.jsx
    MonthNavigator.jsx
    NotesPanel.jsx
  utils/
    dateUtils.js
  public/
    jan.jpg
    feb.jpg
    ...
    dec.jpg
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash id="p4u9l2"
git clone https://github.com/Komalmathamsetti/Calendar-project.git
cd your-repo-name
```

Install dependencies:

```bash id="l2x9mz"
npm install
```

Run the development server:

```bash id="z5d3kp"
npm run dev
```

Open in browser:

```id="q3z0tr"
http://localhost:3000
```

---

## 🧪 Build for Production

```bash id="3k9d1o"
npm run build
```

---

## 🎨 UI & UX Highlights

* Clean and modern card-based design
* Smooth hover and click interactions
* Dynamic visual experience with monthly images
* Clear visual hierarchy and readability

---

## 📌 Key Learnings

* Building reusable React components
* Managing state for date range selection
* Working with date-fns for calendar logic
* Implementing dynamic UI based on state
* Designing responsive layouts with Tailwind CSS
* Deploying production-ready apps using Vercel

---

## 🔮 Future Improvements

* Dark mode support 🌙
* Holiday/event markers 🎉
* Drag-to-select date range
* Image-based theme color adaptation 🎨

---

## 🙌 Acknowledgement

This project was developed as part of a **Frontend Engineering Challenge**, focusing purely on frontend skills, UI/UX, and component architecture.

