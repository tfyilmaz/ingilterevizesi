/**
 * İNGİLTERE VİZESİ FİYATLANDIRMA
 * 
 * Bu dosyada tüm bölgelere göre vize fiyatları bulunmaktadır.
 * Fiyat güncellemesi yapmak için sadece aşağıdaki sayıları değiştirmeniz yeterlidir.
 * 
 * NOTLAR:
 * - Binlik ayracı için virgül kullanın (örn: 1,350)
 * - Para birimi sembolü (£) otomatik eklenir, yazmayın
 * - Tırnak işaretleri içinde yazın
 */

const pricing = {
    // GRUP 1: Antalya, İzmir, Adana, İstanbul (Anadolu Yakası)
    group1: {
        '6month': '310',      // 6 Aylık Vize
        '2year': '650',       // 2 Yıllık Vize
        '5year': '1,120',     // 5 Yıllık Vize
        '10year': '1,350'     // 10 Yıllık Vize
    },
    
    // GRUP 2: Ankara, İstanbul (Avrupa Yakası)
    group2: {
        '6month': '240',      // 6 Aylık Vize
        '2year': '580',       // 2 Yıllık Vize
        '5year': '1,050',     // 5 Yıllık Vize
        '10year': '1,275'     // 10 Yıllık Vize
    },
    
    // GRUP 3: Bursa
    group3: {
        '6month': '460',      // 6 Aylık Vize
        '2year': '800',       // 2 Yıllık Vize
        '5year': '1,270',     // 5 Yıllık Vize
        '10year': '1,500'     // 10 Yıllık Vize
    }
};

// ====================================================================
// AŞAĞIDAKİ SATIRI DEĞİŞTİRMEYİN - Bu kod sitenin çalışması için gerekli
// ====================================================================

