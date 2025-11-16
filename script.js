// Smooth scrolling için navigation linkleri
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Evrakları yükle
function loadDocuments() {
    // Tüm ziyaretçiler için evraklar
    const commonList = document.getElementById('common-documents');
    if (commonList && documents.common) {
        commonList.innerHTML = documents.common.map(doc => `
            <li>
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>${doc.title}</strong>
                    <p>${doc.description}</p>
                </div>
            </li>
        `).join('');
    }

    // Çalışanlar için evraklar
    const employeeList = document.getElementById('employee-documents');
    if (employeeList && documents.employees) {
        employeeList.innerHTML = documents.employees.map(doc => `
            <li>
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>${doc.title}</strong>
                    <p>${doc.description}</p>
                </div>
            </li>
        `).join('');
    }

    // Şirket sahipleri için evraklar
    const businessList = document.getElementById('business-documents');
    if (businessList && documents.business_owners) {
        businessList.innerHTML = documents.business_owners.map(doc => `
            <li>
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>${doc.title}</strong>
                    <p>${doc.description}</p>
                </div>
            </li>
        `).join('');
    }

    // Emekliler için evraklar
    const retireeList = document.getElementById('retiree-documents');
    if (retireeList && documents.retirees) {
        retireeList.innerHTML = documents.retirees.map(doc => `
            <li>
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>${doc.title}</strong>
                    <p>${doc.description}</p>
                </div>
            </li>
        `).join('');
    }

    // Öğrenciler için evraklar
    const studentList = document.getElementById('student-documents');
    if (studentList && documents.students) {
        studentList.innerHTML = documents.students.map(doc => `
            <li>
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>${doc.title}</strong>
                    <p>${doc.description}</p>
                </div>
            </li>
        `).join('');
    }
}

// Sayfa yüklendiğinde evrakları yükle
document.addEventListener('DOMContentLoaded', function() {
    loadDocuments();
});

// Form kaldırıldı - Artık gerek yok

// NOT: Fiyatlar prices.js dosyasından otomatik yüklenir.
// Fiyat güncellemesi yapmak için prices.js dosyasını düzenleyin.

// Bölge seçim butonları
const regionButtons = document.querySelectorAll('.region-btn');

regionButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Tüm butonlardan active class'ını kaldır
        regionButtons.forEach(btn => btn.classList.remove('active'));
        
        // Tıklanan butona active ekle
        this.classList.add('active');
        
        // Seçilen bölgeyi al
        const region = this.dataset.region;
        
        // Fiyatları güncelle
        updatePrices(region);
    });
});

function updatePrices(region) {
    const prices = pricing[region];
    
    // Her fiyatı güncelle
    document.querySelector('[data-price-6month]').textContent = `£ ${prices['6month']}`;
    document.querySelector('[data-price-2year]').textContent = `£ ${prices['2year']}`;
    document.querySelector('[data-price-5year]').textContent = `£ ${prices['5year']}`;
    document.querySelector('[data-price-10year]').textContent = `£ ${prices['10year']}`;
    
    // Animasyon efekti
    document.querySelectorAll('.price .amount').forEach(price => {
        price.style.transform = 'scale(1.1)';
        setTimeout(() => {
            price.style.transform = 'scale(1)';
        }, 200);
    });
}
// Scroll olduğunda navigation bar'a gölge efekti ekle ve aktif bölümü vurgula
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    // Aktif bölümü tespit et ve menüde vurgula
    updateActiveSection();
});

// Aktif section'ı tespit edip menüde vurgula
function updateActiveSection() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Eğer scroll pozisyonu bu section'ın içindeyse
        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Tüm linklerden active class'ını kaldır
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Eğer link'in href'i aktif section'a işaret ediyorsa active yap
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// Sayfa yüklendiğinde de kontrol et
document.addEventListener('DOMContentLoaded', function() {
    updateActiveSection();
});

// WhatsApp butonuna animasyon ekle
const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    // Her 3 saniyede bir pulse animasyonu
    setInterval(() => {
        whatsappButton.style.animation = 'pulse 0.5s';
        setTimeout(() => {
            whatsappButton.style.animation = '';
        }, 500);
    }, 3000);
}

// Pulse animasyonu için CSS ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.15);
        }
    }
`;
document.head.appendChild(style);

