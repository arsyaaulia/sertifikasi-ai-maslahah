// Database ID sertifikat yang valid
const validCertificates = [
    'AI-ADAB-2026-001',
    'AI-ADAB-2026-002'
    // Tambahkan ID baru di sini
];

function searchCertificate() {
    const searchInput = document.getElementById('searchInput').value.trim().toUpperCase();
    
    if (!searchInput) {
        showNotification('Silakan masukkan ID sertifikat', 'warning');
        return;
    }
    
    // Cek apakah ID valid
    if (validCertificates.includes(searchInput)) {
        // Redirect ke halaman sertifikat
        window.location.href = `sertifikat/${searchInput}.html`;
    } else {
        showNotification('Sertifikat tidak ditemukan. Periksa kembali ID yang dimasukkan.', 'error');
    }
}

// Handle enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchCertificate();
    }
});

// Fungsi notifikasi
function showNotification(message, type) {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? 'rgba(153, 27, 27, 0.9)' : 'rgba(146, 64, 14, 0.9)'};
        color: white;
        padding: 16px 24px;
        border-radius: 16px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
        z-index: 1000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Tambahkan CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);