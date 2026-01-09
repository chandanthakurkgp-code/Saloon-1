// यह कोड अपने आप 'वर्तमान स्थान' से 'दुकान' तक का रास्ता बना देगा
const googleMapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.name + ' ' + p.address)}`;

partnersHtml += `
    <div class="list-card">
        <h3>${p.name}</h3>
        <p>📍 ${p.address}</p>
        <p>📞 ${p.mobile}</p>
        <div class="btn-group">
            <a href="tel:${p.mobile}" class="action-btn">📞 CALL</a>
            <a href="https://wa.me/${p.whatsapp}" class="action-btn">💬 WHATSAPP</a>
            ${p.cardLink ? `<a href="${p.cardLink}" target="_blank" class="action-btn" style="background-color: #ff9800; color: white;">🗂️ CARD</a>` : ''}
            <a href="${googleMapUrl}" target="_blank" class="action-btn" style="background-color: #ffeb3b;">📍 MAPS</a>
            <button onclick="shareShop('${p.name}', '${p.address}')" class="action-btn" style="background-color: #03a9f4; color: white; grid-column: span 2;">📤 SHARE THIS SHOP</button>
        </div>
    </div>`;
