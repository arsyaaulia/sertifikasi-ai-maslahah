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

// Fungsi notifikasi sederhana
function showNotification(message, type) {
    // Hapus notifikasi sebelumnya jika ada
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Buat notifikasi baru
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#fee2e2' : '#fef3c7'};
        color: ${type === 'error' ? '#991b1b' : '#92400e'};
        padding: 16px 24px;
        border-radius: 16px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Hapus setelah 3 detik
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