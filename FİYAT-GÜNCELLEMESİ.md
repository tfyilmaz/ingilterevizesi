# 💰 Fiyat Güncelleme Rehberi

Bu dosya, web sitenizdeki vize fiyatlarını nasıl güncelleyeceğinizi anlatmaktadır.

## 📝 Hızlı Adımlar

1. **`prices.js`** dosyasını herhangi bir metin editörü ile açın
2. Değiştirmek istediğiniz fiyatı bulun
3. Sayıyı değiştirin
4. Dosyayı kaydedin
5. Web sitesini yenileyip kontrol edin

## 📍 Bölgeler

Web sitenizde 3 farklı bölge tanımlı:

### Grup 1: Antalya, İzmir, Adana, İstanbul (Anadolu)
- Varsayılan olarak bu bölge seçili gelir
- En çok kullanılan fiyat grubu

### Grup 2: Ankara, İstanbul (Avrupa)
- İkinci fiyat grubu

### Grup 3: Bursa
- Üçüncü fiyat grubu

## 📊 Vize Türleri

Her bölge için 4 farklı vize türü var:

- **6 Aylık Vize** (`6month`)
- **2 Yıllık Vize** (`2year`)
- **5 Yıllık Vize** (`5year`)
- **10 Yıllık Vize** (`10year`)

## 💡 Örnek Güncelleme

### Önce:
```javascript
group1: {
    '6month': '310',
    '2year': '650',
    '5year': '1,120',
    '10year': '1,350'
}
```

### Sonra:
```javascript
group1: {
    '6month': '350',      // 310'dan 350'ye yükseltildi
    '2year': '700',       // 650'den 700'e yükseltildi
    '5year': '1,200',     // 1,120'den 1,200'e yükseltildi
    '10year': '1,450'     // 1,350'den 1,450'ye yükseltildi
}
```

## ⚠️ Önemli Notlar

1. **Tırnak işaretlerini silmeyin** → Sayıları `'...'` içinde bırakın
2. **Virgül kullanın binliklerde** → `1,350` şeklinde (nokta değil!)
3. **£ sembolünü yazmayın** → Otomatik eklenir
4. **Virgülleri unutmayın** → Her satır sonunda virgül olmalı (son satır hariç)

## ❌ Yapmamanız Gerekenler

```javascript
// YANLIŞ - Tırnak yok
'6month': 310,

// YANLIŞ - Nokta var
'6month': '1.350',

// YANLIŞ - £ sembolü var
'6month': '£350',

// YANLIŞ - Son satırdan sonraki virgülü sildiniz
'10year': '1,350'
}  // ← Bu süslü parantezden önceki satırda virgül olmamalı
```

## ✅ Doğru Kullanım

```javascript
group1: {
    '6month': '310',      // ← Virgül var
    '2year': '650',       // ← Virgül var
    '5year': '1,120',     // ← Virgül var
    '10year': '1,350'     // ← Son satır, virgül YOK
}
```

## 🆘 Sorun mu Yaşıyorsunuz?

Eğer siteyi açtığınızda fiyatlar görünmüyorsa:

1. Tarayıcıyı tamamen kapatıp tekrar açın
2. Tarayıcı önbelleğini temizleyin (Ctrl+Shift+Delete)
3. `prices.js` dosyasındaki virgülleri kontrol edin
4. Tırnak işaretlerinin silinmediğinden emin olun

## 📞 İletişim Bilgilerini Değiştirmek

Fiyat dışında başka bilgileri değiştirmek için `index.html` dosyasını düzenlemeniz gerekir:

- Telefon numarası
- E-posta adresi
- Adres bilgisi
- WhatsApp linki

---

**Son Güncelleme:** Kasım 2025

