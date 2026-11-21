# KSAK · An음 — Live Lyrics App

A mobile web app for the **An음** concert (2026.11.22, 18:00).
Guests scan a QR code, see the setlist and read lyrics + English translations.
Managers open a hidden `/admin` page and tap **Set as Live**, and every guest phone shows the **LIVE** badge instantly.

| Page | Address | Who |
|---|---|---|
| Setlist | `/` | Guests (put this in the QR code) |
| Lyrics | `/song/<id>` | Guests (opened by tapping a song) |
| Control panel | `/admin` | Managers only (PIN protected, no link anywhere) |

---

## 📁 What's in this folder

```
ksak-anum/
├── src/data/songs.js     ← ⭐ THE SETLIST, LYRICS & TRANSLATIONS (edit this one)
├── src/pages/Admin.jsx   ← admin page (PIN fallback lives here)
├── src/pages/…           ← setlist + lyrics pages
├── src/firebase.js       ← database connection (no need to edit)
├── public/ksak-logo.jpg  ← logo   public/ticket-art.jpg ← header art from the ticket
├── database.rules.json   ← security rules to paste into Firebase
├── .env.example          ← list of the keys you need
└── vercel.json, public/_redirects  ← make /song/... links work on Vercel / Netlify
```

You need **three free accounts**: Google (for Firebase), GitHub, and Vercel. About 20–30 minutes in total.

---

## STEP 1 — Create the free Firebase database

1. Go to **https://console.firebase.google.com** and sign in with Google.
2. Click **Create a project** (or **Add project**). Name it e.g. `ksak-anum`. You can turn **Google Analytics off**. Click **Create project**, then **Continue**.
3. In the left menu open **Build → Realtime Database** and click **Create Database**.
   - Location: **Singapore (asia-southeast1)**, the closest to Seoul.
   - Security rules: choose **Start in locked mode**. Click **Enable**.
4. Open the **Rules** tab, delete everything there, paste the full content of `database.rules.json` from this folder, and click **Publish**.
   *(These rules let guests read the live song and let the app change it. Nothing else can be read or written.)*
5. Go back to **Project Overview** (house icon, top left) and click the **`</>` (Web)** icon to add a web app.
   - Nickname: `an-eum-web`. **Don't** tick "Firebase Hosting". Click **Register app**.
6. You'll see a code block like this. **Keep this page open** because you'll copy these values in Step 3:
   ```js
   const firebaseConfig = {
     apiKey: "AIza....",
     authDomain: "ksak-anum.firebaseapp.com",
     databaseURL: "https://ksak-anum-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "ksak-anum",
     storageBucket: "ksak-anum.firebasestorage.app",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abc123"
   };
   ```
   > If `databaseURL` is missing, copy it from **Realtime Database → Data** tab (the link at the top that ends in `firebasedatabase.app`).

*(You can find these values again later: ⚙️ **Project settings → General → Your apps**.)*

---

## STEP 2 — Put the code on GitHub

1. Go to **https://github.com**, sign up or log in, click **+ → New repository**.
2. Name: `ksak-anum`, leave it **Public** or choose **Private** (both work), click **Create repository**.
3. On the new empty repo page click **"uploading an existing file"**.
4. Unzip `ksak-anum.zip` on your computer, open the `ksak-anum` folder, select **everything inside it** (the `src` and `public` folders, `package.json`, `index.html`, etc.) and drag it into the GitHub page.
   - On Mac, hidden files like `.gitignore` won't show up. That's fine, the app works without them.
5. Click **Commit changes**.

---

## STEP 3 — Deploy on Vercel (free, online 24/7)

1. Go to **https://vercel.com**, click **Sign Up → Continue with GitHub**, choose the free **Hobby** plan.
2. Click **Add New… → Project**, find `ksak-anum` in the list and click **Import**.
3. **Project Name:** `ksak-anum`. This becomes your web address.
   Framework Preset should say **Vite** automatically (leave build settings as they are).
4. Open **Environment Variables** and add these **8** entries one by one (Key on the left, Value on the right). Use the values from Step 1.6, **without quotes**:

   | Key | Value (example) |
   |---|---|
   | `VITE_FIREBASE_API_KEY` | `AIza....` |
   | `VITE_FIREBASE_AUTH_DOMAIN` | `ksak-anum.firebaseapp.com` |
   | `VITE_FIREBASE_DATABASE_URL` | `https://ksak-anum-default-rtdb.asia-southeast1.firebasedatabase.app` |
   | `VITE_FIREBASE_PROJECT_ID` | `ksak-anum` |
   | `VITE_FIREBASE_STORAGE_BUCKET` | `ksak-anum.firebasestorage.app` |
   | `VITE_FIREBASE_MESSAGING_SENDER_ID` | `1234567890` |
   | `VITE_FIREBASE_APP_ID` | `1:1234567890:web:abc123` |
   | `VITE_ADMIN_PIN` | the PIN from `ADMIN_PIN.txt` (or your own) |

5. Click **Deploy** and wait about a minute. 🎉

> **Changed an environment variable later?** It only takes effect after a redeploy: **Deployments → ⋯ (next to the latest) → Redeploy**.

---

## STEP 4 — Your public URLs

After deploying, Vercel shows your address. With the project name `ksak-anum` it will be:

- **Guest URL (put this in the QR code):** `https://ksak-anum.vercel.app`
- **Manager URL (keep this private):** `https://ksak-anum.vercel.app/admin`

If that name was already taken, Vercel adds something like `ksak-anum-abc1.vercel.app`. Use **exactly** the domain shown on your Vercel dashboard (**Project → Domains**). You can also edit the name there (Settings → Domains → Edit) to something short like `an-eum.vercel.app`, if it's free.

**Make the QR code:** paste the guest URL into any free QR generator (for example, https://www.qr-code-generator.com or a phone's built-in "share as QR"). Test-scan it with 2 different phones before printing.

---

## STEP 5 — Test before the show (5 minutes)

1. Open the **guest URL** on your phone and the **/admin URL** on a laptop.
2. Admin: enter the PIN → the top line must say **"Connected — guests update instantly"** (not "DEMO MODE").
3. Tap **Set as Live** on song 1 → the phone shows the red **LIVE** badge within ~1 second, no refresh needed.
4. Tap **No Song Playing** → the badge disappears.

If admin says **DEMO MODE**, the Firebase keys aren't set. Recheck the 8 variables in Vercel and **Redeploy**.
If you see **"Could not save … PERMISSION_DENIED"**, re-paste `database.rules.json` into Firebase → Rules → **Publish**.

---

## ✏️ Adding teammates' songs, lyrics & translations

Everything is in **`src/data/songs.js`**. The comments at the top of that file explain each field. Search for **`PASTE HERE`**.

**Easiest way, directly on GitHub (no installs):**
1. Open your repo on github.com → `src` → `data` → `songs.js` → click the ✏️ **pencil** icon.
2. Edit: replace the two placeholder songs (`seul-tunderi`, `dala-aueni`) or copy the template at the bottom.
   - Lyrics go between **backticks** `` ` ``, one line per line.
   - Song order in the file = order on the setlist.
3. Click **Commit changes**. Vercel rebuilds automatically, and the site updates in about a minute.

**Song 2 note:** a few lines in the source lyrics had typos, so their translation is a best guess. Those lines are marked `⟨?⟩` in `songs.js`. Ask the team to check them and delete the `⟨?⟩` marks.

**Check before the show:** if a page goes blank after an edit, there's usually a missing comma or backtick. Open the latest deployment on Vercel. The build log names the line number.

---

## 💻 (Optional) Run it on your own computer

Needs **Node.js 18+** (https://nodejs.org).

```bash
cd ksak-anum
npm install
cp .env.example .env.local     # then fill in the values
npm run dev                    # open the link it prints, e.g. http://localhost:5173
```

Without `.env.local` the app runs in **DEMO MODE**: everything works, but the live state stays in your own browser (handy for testing the design).

---

## 🟩 Alternative: Netlify instead of Vercel

**https://app.netlify.com** → *Add new site → Import an existing project → GitHub* → pick `ksak-anum`.
Build command: `npm run build` · Publish directory: `dist` · add the same 8 environment variables under *Site configuration → Environment variables* → **Deploy**.
URL: `https://<site-name>.netlify.app` (the `public/_redirects` file already makes `/song/...` and `/admin` links work).

---

## 🔒 About security (honest note)

- The PIN keeps random guests out of `/admin`, and the admin page is never linked from the guest site.
- The PIN check runs in the browser, so a determined tech-savvy person could get around it. The database rules limit any damage to just changing which song shows as "LIVE". Lyrics can't be edited from outside. For a one-night student concert this is a reasonable trade-off.
- Change the PIN any time: edit `VITE_ADMIN_PIN` in Vercel → Redeploy.

---

## Free-tier limits

Firebase Spark (free) plan: 100 simultaneous connections and 10 GB/month download. A concert crowd with a tiny "live song id" value uses a very small fraction of that. Vercel Hobby is free for personal/non-commercial projects.
