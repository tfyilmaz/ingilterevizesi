# 🔍 SEO Meta Tag Güncelleme Rehberi

Bu dosya, `index.html` dosyasındaki SEO meta tag'lerini nasıl güncelleyeceğinizi gösterir.

## 📍 Meta Tag'ler Nerede?

Tüm meta tag'ler `index.html` dosyasının **7-27. satırları** arasında bulunur (`<head>` bölümünde).

---

## 1️⃣ Sayfa Başlığı (Title) - Satır 8

**Mevcut:**
```html
<title>İngiltere Vizesi Danışmanlığı | Magidos Tur - 6 Ay, 2 Yıl, 5 Yıl, 10 Yıl Vize Hizmetleri</title>
```

**Ne İşe Yarar:**
- Google arama sonuçlarında görünen başlık
- Tarayıcı sekmesinde görünen isim
- **ÖNEMLİ:** 50-60 karakter ideal uzunluk

**Örnek Güncelleme:**
```html
<title>İngiltere Vizesi | Magidos Tur - Hızlı ve Güvenilir Vize Danışmanlığı</title>
```

---

## 2️⃣ Açıklama (Description) - Satır 9

**Mevcut:**
```html
<meta name="description" content="İngiltere turistik vize başvurusu için profesyonel danışmanlık. Gerekli evraklar, başvuru prosedürü ve güncel vize ücretleri. Antalya, İzmir, Ankara, İstanbul, Bursa ofislerimizle hizmetinizdeyiz.">
```

**Ne İşe Yarar:**
- Google arama sonuçlarında başlığın altında görünen açıklama
- **ÖNEMLİ:** 150-160 karakter ideal uzunluk

**Örnek Güncelleme:**
```html
<meta name="description" content="İngiltere vizesi için profesyonel danışmanlık. 6 ay, 2 yıl, 5 yıl, 10 yıllık vize seçenekleri. Gerekli evraklar ve güncel fiyatlar. Tüm Türkiye'de hizmet.">
```

---

## 3️⃣ Anahtar Kelimeler (Keywords) - Satır 10

**Mevcut:**
```html
<meta name="keywords" content="ingiltere vizesi, uk vize, ingiltere turistik vize, ingiltere vize başvurusu, ingiltere vize danışmanlık, 6 aylık ingiltere vizesi, 2 yıllık ingiltere vizesi, magidos tur">
```

**Ne İşe Yarar:**
- Arama motorları için ipucu (artık çok önemli değil ama yine de iyi)
- Virgülle ayırarak kelimeler ekleyin

**Örnek Güncelleme:**
```html
<meta name="keywords" content="ingiltere vizesi, uk vize, ingiltere turistik vize, ingiltere vize başvurusu, ingiltere vize danışmanlık, 6 aylık ingiltere vizesi, 2 yıllık ingiltere vizesi, 5 yıllık ingiltere vizesi, 10 yıllık ingiltere vizesi, magidos tur, antalya ingiltere vizesi">
```

---

## 4️⃣ Canonical URL - Satır 13

**Mevcut:**
```html
<link rel="canonical" href="https://www.ingilterevizesi.app/">
```

**Ne İşe Yarar:**
- Google'a sitenizin "asıl" adresini söyler
- **ÖNEMLİ:** Sitenizin tam adresini yazın (www ile birlikte)

**Not:** Domain değişirse mutlaka güncelleyin!

---

## 5️⃣ Open Graph Tags (Facebook/LinkedIn Paylaşımları) - Satır 16-21

**Mevcut:**
```html
<meta property="og:title" content="İngiltere Vizesi Danışmanlığı | Magidos Tur">
<meta property="og:description" content="İngiltere turistik vize başvurusu için profesyonel danışmanlık. Gerekli evraklar, başvuru prosedürü ve güncel vize ücretleri.">
<meta property="og:url" content="https://www.ingilterevizesi.app/">
<meta property="og:image" content="https://www.ingilterevizesi.app/logo.png">
```

**Ne İşe Yarar:**
- Facebook, LinkedIn, WhatsApp'ta link paylaşıldığında güzel görünmesi için
- `og:image` için **en az 1200x630 piksel** bir görsel kullanın

**Örnek Güncelleme:**
```html
<meta property="og:title" content="İngiltere Vizesi - Profesyonel Danışmanlık | Magidos Tur">
<meta property="og:description" content="6 ay, 2 yıl, 5 yıl ve 10 yıllık İngiltere vize başvurusu. Gerekli evraklar ve güncel fiyatlar. Hemen başvurun!">
```

---

## 6️⃣ Twitter Card Tags - Satır 24-27

**Mevcut:**
```html
<meta name="twitter:title" content="İngiltere Vizesi Danışmanlığı | Magidos Tur">
<meta name="twitter:description" content="İngiltere turistik vize başvurusu için profesyonel danışmanlık. Gerekli evraklar, başvuru prosedürü ve güncel vize ücretleri.">
<meta name="twitter:image" content="https://www.ingilterevizesi.app/logo.png">
```

**Ne İşe Yarar:**
- Twitter'da link paylaşıldığında güzel görünmesi için
- `twitter:image` için **en az 800x418 piksel** bir görsel kullanın

---

## 🎯 SEO İpuçları

### ✅ YAPILMASI GEREKENLER
1. **Title'ı güncelle** → Her sayfanın kendine özel bir başlığı olmalı
2. **Description'ı güncelle** → Kullanıcıların tıklamasını sağlayacak çekici bir açıklama yaz
3. **Keywords ekle** → Müşterilerin arayabileceği kelimeleri ekle
4. **Görseli optimize et** → `logo.png` yerine 1200x630 boyutunda bir sosyal medya görseli kullan

### ❌ YAPILMAMASI GEREKENLER
1. Anahtar kelime doldurma (spam)
2. 160 karakterden uzun description
3. 60 karakterden uzun title
4. Alakasız anahtar kelimeler

---

## 🛠️ Güncelleme Adımları

1. `index.html` dosyasını açın
2. Yukarıdaki satır numaralarına gidin
3. İlgili `content="..."` kısmını değiştirin
4. Dosyayı kaydedin
5. Git ile push edin:
   ```bash
   git add index.html
   git commit -m "SEO meta tag güncellendi"
   git push
   ```

---

## 📊 SEO Testleri

Değişikliklerden sonra şu araçlarla test edin:

1. **Google Search Console** → https://search.google.com/search-console
2. **Facebook Sharing Debugger** → https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator** → https://cards-dev.twitter.com/validator
4. **LinkedIn Post Inspector** → https://www.linkedin.com/post-inspector/

---

## 📞 Sorularınız mı var?

Bu dosya, SEO meta tag'lerinizi kolayca güncellemeniz için hazırlandı. Herhangi bir soru için Cursor AI'ya danışabilirsiniz!

