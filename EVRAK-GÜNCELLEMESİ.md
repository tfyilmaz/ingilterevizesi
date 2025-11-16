# 📄 Evrak Güncelleme Rehberi

Bu dosya, web sitenizdeki gerekli evraklar listesini nasıl güncelleyeceğinizi anlatmaktadır.

## 📝 Hızlı Adımlar

1. **`documents.js`** dosyasını herhangi bir metin editörü ile açın
2. Değiştirmek istediğiniz evrak kategorisini bulun
3. Evrak başlığını veya açıklamasını değiştirin
4. Dosyayı kaydedin
5. Web sitesini yenileyip kontrol edin

## 📋 Evrak Kategorileri

Web sitenizde 5 farklı evrak kategorisi var:

### 1. Tüm Ziyaretçiler İçin (`common`)
Herkes için gerekli olan ortak evraklar

### 2. Çalışanlar İçin (`employees`)
SGK'lı çalışanlar için ek evraklar

### 3. Şirket Sahipleri İçin (`business_owners`)
Kendi işini yapanlar için ek evraklar

### 4. Emekliler İçin (`retirees`)
Emekli olanlar için ek evraklar

### 5. Öğrenciler İçin (`students`)
Öğrenciler için ek evraklar

## 💡 Evrak Ekleme Örneği

### Mevcut evrakları kopyalayıp yapıştırın:

```javascript
employees: [
    {
        title: 'Çalışma Belgesi',
        description: 'İşveren mektubu (SGK kayıtlı olduğunuzu belirten)'
    },
    {
        title: 'SGK Belgesi',
        description: 'SGK hizmet dökümü veya işe giriş bildirimi'
    },
    // YENİ EVRAK BURAYA EKLENDİ ↓
    {
        title: 'Yeni Evrak Adı',
        description: 'Yeni evrak açıklaması buraya yazılır'
    }  // ← SON EVRAĞIN SONUNDA VIRGÜL OLMAZ!
]
```

## 📌 Evrak Silme Örneği

Silmek istediğiniz evrak bloğunu tamamen silin:

```javascript
// BU EVRAKI SİLMEK İSTİYORSANIZ:
{
    title: 'Silinecek Evrak',
    description: 'Açıklama'
},  // ← Tüm bu bloğu silin
```

## 📝 Evrak Düzenleme Örneği

### Önce:
```javascript
{
    title: 'Pasaport',
    description: 'En az 6 ay geçerli pasaport'
}
```

### Sonra:
```javascript
{
    title: 'Pasaport',
    description: 'En az 6 ay geçerlilik süresi olan pasaport (eski pasaportlar varsa onlar da)'
}
```

## ⚠️ Önemli Notlar

1. **Süslü parantezlere dikkat** → Her evrak `{` ile başlar `}` ile biter
2. **Virgülleri unutmayın** → Evraklar arası virgül olmalı (son evrak hariç)
3. **Tırnak işaretleri** → `title` ve `description` tırnak içinde olmalı
4. **Apostrof kullanımı** → Türkçe kelimelerde `'` varsa `\'` şeklinde yazın

## ✅ Doğru Kullanım

```javascript
common: [
    {
        title: 'Pasaport',
        description: 'Geçerli pasaport belgesi'
    },  // ← Virgül var
    {
        title: 'Fotoğraf',
        description: 'Biyometrik fotoğraf'
    }  // ← Son evrak, virgül YOK
]
```

## ❌ Yanlış Kullanım

```javascript
// YANLIŞ - Virgül yok
{
    title: 'Pasaport'
    description: 'Açıklama'
}

// YANLIŞ - Tırnak yok
{
    title: Pasaport,
    description: Açıklama
}

// YANLIŞ - Son evrakta virgül var
{
    title: 'Son Evrak',
    description: 'Açıklama'
},  // ← Bu virgül olmamalı
]
```

## 🔤 Özel Karakterler

Türkçe karakterlerde sorun yoktur, ama bazı özel durumlarda dikkat edin:

```javascript
// Apostrof kullanımı:
description: 'İngiltere\'de kalacağınız yer'
//                    ↑ Ters slash ile kaçış

// Çift tırnak kullanımı:
description: 'Bankadan "onaylı" belge'
//                     ↑        ↑ Sorun yok
```

## 🆘 Sorun mu Yaşıyorsunız?

Eğer siteyi açtığınızda evraklar görünmüyorsa:

1. **Tarayıcıyı yenileyin** (Ctrl+F5 veya Cmd+Shift+R)
2. **Virgülleri kontrol edin** → Her evrak arası virgül olmalı
3. **Süslü parantezleri kontrol edin** → Açılan her `{` kapanmalı `}`
4. **Tırnak işaretlerini kontrol edin** → Her `'` kapatılmalı `'`

## 🎯 Hızlı Kopyala-Yapıştır Şablonu

Yeni evrak eklerken bunu kullanın:

```javascript
{
    title: 'Evrak Adı',
    description: 'Evrak açıklaması buraya'
},
```

**Not:** En son evrakta virgül olmayacağını unutmayın!

## 📞 Diğer Güncellemeler

- **Fiyat güncellemesi:** `prices.js` dosyasına bakın
- **İletişim bilgileri:** `index.html` dosyasını düzenleyin

---

**Son Güncelleme:** Kasım 2025

