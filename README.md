# İngiltere Vizesi Danışmanlığı Web Sitesi

Modern ve mobil öncelikli İngiltere vizesi danışmanlık web sitesi.

## 🚀 Özellikler

- ✅ **Mobile-First Tasarım** - Tüm cihazlarda mükemmel görünüm
- 📱 **Responsive** - Telefon, tablet ve masaüstü uyumlu
- 🎨 **Modern UI/UX** - Kullanıcı dostu arayüz
- 💬 **WhatsApp Entegrasyonu** - Floating WhatsApp butonu
- 📋 **Gerekli Evraklar** - Detaylı evrak listesi
- 📝 **Başvuru Prosedürü** - Adım adım rehber
- 💰 **Ücret Bilgileri** - Şeffaf fiyatlandırma
- 📞 **İletişim Formu** - Kolay iletişim

## 📁 Dosyalar

- `index.html` - Ana sayfa
- `style.css` - Stil dosyası
- `script.js` - JavaScript fonksiyonları
- `README.md` - Dökümantasyon

## 🔧 Kurulum ve Kullanım

1. Tüm dosyaları bir klasöre yerleştirin
2. `index.html` dosyasını herhangi bir modern tarayıcıda açın
3. Site hazır!

## ⚙️ Özelleştirme

### 1. İletişim Bilgilerini Güncelleyin

`index.html` dosyasında **İletişim** bölümünü bulun ve şu bilgileri güncelleyin:

```html
<p>+90 (XXX) XXX XX XX</p>        <!-- Telefon numarası -->
<p>info@seyahatacenta.com</p>     <!-- E-posta -->
<p>Merkez Mahallesi...</p>         <!-- Adres -->
```

### 2. WhatsApp Numarasını Ayarlayın

`index.html` dosyasının en altında bulunan WhatsApp butonunu güncelleyin:

```html
<a href="https://wa.me/90XXXXXXXXXX" ...>
```

`90XXXXXXXXXX` kısmını kendi WhatsApp numaranızla değiştirin (ülke kodu ile birlikte, boşluksuz).

### 3. Vize Ücretlerini Güncelleyin

`index.html` dosyasında **Ücretler** bölümünde fiyatları güncelleyin:

```html
<span class="amount">£ 350</span>   <!-- 6 aylık -->
<span class="amount">£ 650</span>   <!-- 2 yıllık -->
<span class="amount">£ 1,200</span> <!-- 10 yıllık -->
```

### 4. Renk Temasını Değiştirin

`style.css` dosyasının en üstündeki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #1a365d;      /* Ana renk */
    --secondary-color: #2c5282;    /* İkincil renk */
    --accent-color: #3182ce;       /* Vurgu rengi */
    --success-color: #25D366;      /* WhatsApp yeşil */
}
```

## 🌐 Canlıya Alma

### Basit Web Hosting
- Tüm dosyaları bir hosting sağlayıcısına yükleyin
- Öneriler: Netlify, Vercel, GitHub Pages (ücretsiz)

### GitHub Pages ile Yayınlama
1. GitHub'da bir repository oluşturun
2. Dosyaları repository'ye yükleyin
3. Settings > Pages > Source: main branch seçin
4. Siteniz `username.github.io/repo-name` adresinde yayında!

## 💡 İpuçları

- **Görsel Ekleyin**: Logo için bir resim ekleyebilirsiniz
- **SEO**: Meta etiketlerini web sitenize göre güncelleyin
- **Analytics**: Google Analytics ekleyerek ziyaretçi analizi yapın
- **Form Backend**: Gerçek e-posta gönderimi için bir backend servisi ekleyin (örn: Formspree, EmailJS)

## 📱 Tarayıcı Uyumluluğu

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobil tarayıcılar

## 🎨 Kullanılan Teknolojiler

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- Font Awesome Icons

## 📝 Lisans

Bu proje serbestçe kullanılabilir ve özelleştirilebilir.

---

**Not**: Form gönderim fonksiyonu şu anda sadece bir uyarı mesajı göstermektedir. Gerçek bir form backend'i eklemek için EmailJS, Formspree veya kendi backend'inizi kullanabilirsiniz.

