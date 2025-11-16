/**
 * İNGİLTERE VİZESİ GEREKLI EVRAKLAR
 * 
 * Bu dosyada tüm evrak listeleri bulunmaktadır.
 * Evrak güncellemesi yapmak için sadece başlık ve açıklama kısımlarını değiştirin.
 * 
 * KULLANIM:
 * - title: Evrak başlığı
 * - description: Evrak açıklaması
 * 
 * YENİ EVRAK EKLEMEK:
 * Mevcut bir evrakı kopyalayıp yapıştırın, virgüllere dikkat edin!
 */

const documents = {
    // TÜM ZİYARETÇİLER İÇİN GEREKLI EVRAKLAR
    common: [
        {
            title: 'Eski ve Yeni Pasaportlar',
            description: 'Tüm eski ve yeni pasaportlarınız'
        },
        {
            title: 'Giriş-Çıkış Mühürleri ve Eski Vizeler',
            description: 'Pasaportlardaki tüm giriş-çıkış mühürleri ve daha önce almış olduğunuz vizeler'
        },
        {
            title: 'Kimlik',
            description: 'Nüfus cüzdanı veya kimlik kartı'
        },
        
        {
            title: 'Uçak Bileti, Otel Rezervasyonu, Tur Programı',
            description: 'Uçak bileti, gemi bileti rezervasyonları, otel rezervasyonları, tur programı'
        },
        {
            title: 'E-Devlet Nüfus Kayıt Örneği',
            description: 'E-devletten alınmış nüfus kayıt örneği (Eş, çocuklar, anne, baba, kardeşler, varsa eski eş gözükmelidir) PDF formatında'
        },
        {
            title: 'E-Devlet İkametgah Belgesi',
            description: 'E-devletten alınmış ikamet belgesi PDF formatında'
        },
        {
            title: 'Seyahat Sigortası',
            description: 'Seyahat süresini kapsayan seyahat sigortası'
        },
        {
            title: 'İngilizce Niyet Dilekçesi',
            description: 'Elçiliğe hitaben İngilizce niyet dilekçesi (Şirket sahipleri bu dilekçeyi şirketlerinin antetli kağıdına yazmalı ve kaşelemelidir)'
        },
        {
            title: 'Banka Hesap Dökümü',
            description: 'Son üç aylık vadesiz, kaşeli-imzalı, yeterli bakiye olan İngilizce banka hesap dökümü (Şubenizden İngilizce olarak alabilirsiniz) (Randevuya 1 hafta kala alınmış olmalıdır)'
        },
        {
            title: 'Vadeli ve Döviz Hesap Dökümleri',
            description: 'Varsa vadeli ve döviz hesap dökümlerinizi ekleyebilirsiniz'
        },
        {
            title: 'Tapu, Ruhsat vs.',
            description: 'Varsa tapu, araç ruhsatı gibi mülkiyet belgeleriniz'
        },
        {
            title: 'Kira Sözleşmesi',
            description: 'Kirada bir mülkünüz varsa kira sözleşmesi fotokopisi'
        }
    ],

    // ÇALIŞANLAR İÇİN EK EVRAKLAR
    employees: [
        {
            title: 'Maaş Bordrosu',
            description: 'Son üç aylık kaşeli-imzalı maaş bordrosu'
        },
        {
            title: 'Şirket İmza Sirküleri',
            description: 'Şirket yetkilisinin imza sirküleri'
        },
        {
            title: 'İşveren Dilekçesi',
            description: 'Şirketin antetli kağıdına işveren/sorumlu müdür tarafından yazılmış kaşeli-imzalı İngilizce dilekçe (Dilekçede çalışanın adı-soyadı, pasaport numarası, işe giriş tarihi, pozisyonu, izinli olacağı tarihler ve ücretli mi ücretsiz mi izinde olacağı yazılmalıdır)'
        },
        {
            title: 'İşe Giriş Bildirimi',
            description: 'E-devletten işe giriş bildirgesi PDF formatında'
        },
        {
            title: 'SGK Tescil ve Hizmet Dökümü',
            description: 'E-devletten SGK tescil ve hizmet dökümü PDF formatında'
        },
        {
            title: 'Şirket Vergi Levhası',
            description: 'Şirketin vergi levhası PDF formatında'
        },
        {
            title: 'Faaliyet Belgesi',
            description: 'Şirketin güncel faaliyet belgesi'
        },
        {
            title: 'Ticaret Sicil Gazetesi',
            description: 'Şirketin kuruluş ve diğer değişikliklerle ilgili sicil gazetesi'
        }
    ],

    // ŞİRKET SAHİPLERİ İÇİN EK EVRAKLAR
    business_owners: [
        {
            title: 'Şirket Vergi Levhası',
            description: 'Şirketin vergi levhası PDF formatında'
        },
        {
            title: 'Ticaret Sicil Gazetesi',
            description: 'Şirketin kuruluş ve diğer değişikliklerle ilgili sicil gazetesi'
        },
        {
            title: 'İmza Sirküleri',
            description: 'İmza sirküleri'
        },
        {
            title: 'İngilizce Niyet Dilekçesi',
            description: 'Elçiliğe hitaben antetli kağıda İngilizce kaşeli-imzalı niyet dilekçesi'
        },
        {
            title: 'İngilizce Faaliyet Belgesi',
            description: 'İngilizce faaliyet belgesi'
        },
        {
            title: 'SGK Tescil ve Hizmet Dökümü',
            description: 'E-devletten SGK tescil ve hizmet dökümü PDF formatında'
        }
    ],

    // EMEKLİLER İÇİN EK EVRAKLAR
    retirees: [
        {
            title: 'Emekli Aylık Bilgisi',
            description: 'E-devletten emekli aylık bilgisi PDF formatında'
        },
        {
            title: 'SGK Hizmet Dökümü',
            description: 'E-devletten SGK hizmet dökümü PDF formatında'
        }
    ],

    // ÖĞRENCİLER İÇİN EK EVRAKLAR
    students: [
        {
            title: 'İngilizce Öğrenci Belgesi',
            description: 'Okuldan/üniversiteden alınmış İngilizce öğrenci belgesi'
        },
        {
            title: 'E-Devlet Öğrenci Belgesi',
            description: 'E-devletten öğrenci belgesi PDF formatında'
        },
        {
            title: 'Muvafakatname',
            description: '18 yaş altı çocuk yanında anne ya da babadan biri olmadan seyahat ediyorsa, seyahate katılmayan ebeveyn tarafından alınacak İngilizce muvafakatname'
        }
    ]
};

// ====================================================================
// AŞAĞIDAKİ SATIRI DEĞİŞTİRMEYİN - Bu kod sitenin çalışması için gerekli
// ====================================================================

