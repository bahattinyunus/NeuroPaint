

# 🎨 **NeuroPaint – AI-Assisted Creative Canvas**

**Çizimin geleceğine hoş geldin.**
NeuroPaint, klasik Paint deneyimini yapay zekâ ile yeniden tanımlayan vizyoner bir yaratıcı tuvaldir.
Sadece çizim yapmazsın — çizdikçe öğrenen, seni tamamlayan, sana öneriler sunan bir sistemle çalışırsın.

---

## 🌟 **Öne Çıkan Özellikler**

### 🧠 **AI Stroke Prediction**

Sen çizgi çekersin; NeuroPaint çizginin devamını tahmin eder, şekli düzeltir, daha akıcı hâle getirir.
“Ben senin tarzını çözdüm.” modu.

---

### 🎨 **Real-Time Style Transfer**

Çizimini anında farklı sanat stillerine dönüştür:

* Van Gogh
* Cyberpunk
* Pixar
* Minimal UI/UX
  Tek tıkla vizyonu değiştir.

---

### 🟦 **Shape Intelligence**

Eliyle çizdiğin yamuk şekilleri tespit eder → kusursuz geometrik forma dönüştürür.
Tasarımcıların dua sebebi.

---

### 🖼️ **Image → Editable Sketch**

Yüklediğin fotoğrafı otomatik olarak çizilebilir, düzenlenebilir bir skeç formatına çevirir.

---

### 🔍 **AI Zoom & Infinite Canvas**

Yaklaştıkça yeni detaylar üretir.
Tuval sonsuzdur; fikirlerin gibi.

---

### 🗂️ **Smart Layer Naming**

Katmanlara otomatik isim verir:

* “Ana karakter – yüz ovali”
* “Background mountain 01”
* “Shadow cluster”

Organize bir sanat ortamı için birebir.

---

## 🛠️ **Teknoloji Yığını**

### **Frontend**

* React
* Konva.js / Fabric.js (canvas engine)
* Zustand
* TailwindCSS

### **Backend**

* FastAPI
* OpenAI API (gpt-4o + vision)
* Diffusion modelleri (style transfer)
* WebSocket destekli gerçek zamanlı çizim modu

### **Diğer**

* Docker Compose
* Supabase / S3 (dosya depolama)
* PostgreSQL + Prisma (veritabanı)

---

## 📁 **Proje Yapısı**

```
neuropaint/
│
├── frontend/
│   ├── src/
│   │   ├── canvas/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── store/
│   │   └── utils/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── ai/
│   │   ├── routes/
│   │   ├── models/
│   │   └── utils/
│   └── pyproject.toml
│
└── docker-compose.yml
```

---

## ⚙️ **Kurulum**

### 1. Ortam değişkenlerini hazırla

```
cp .env.example .env
```

### 2. Docker Compose ile çalıştır

```
docker compose up --build
```

### 3. URL’ler

* **Frontend:** [http://localhost:5173](http://localhost:5173)
* **Backend:** [http://localhost:8000](http://localhost:8000)

---

## 🗺️ **Roadmap**

* [ ] Real-time multiplayer canvas
* [ ] Voice-to-art komutları
* [ ] AI Brush (çizgileri otomatik optimize eder)
* [ ] Color Harmony Engine
* [ ] Timeline: çizim geçmişinin katman katman takibi
* [ ] Export to PSD
* [ ] Mobile/Tablet özel arayüz

---

## 🤝 **Katkı**

Pull request’ler memnuniyetle kabul edilir.
Vizyonu büyütmek isteyen herkes projeye katkıda bulunabilir.

---

## 📜 **Lisans**

MIT License.

