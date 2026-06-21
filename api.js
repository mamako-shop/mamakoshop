// Mamako Loko Shop - Central API e Configurações

var googleSheetCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGMz9XAk5spv5FFN585VM6g6toC79iulNUFqYB76MQmRTuhjnyTjRSybOuyhZ5FImNompOX0eFjZI0/pub?output=csv";
var whatsappPadrao = "5561993935402";
var vendedorPadrao = "Mamako";

function safeStr(val) {
    return val ? String(val).trim() : '';
}

function splitList(val) {
    return val ? val.split(',').map(s => s.trim()).filter(Boolean) : [];
}

// Converte a linha bruta do PapaParse no formato de Conta
function mapRow(row) {
    return {
        id:                  safeStr(row.id),
        title:               safeStr(row.title),
        power:               safeStr(row.power),
        tagline:               safeStr(row.tagline),
        image:               safeStr(row.image),
        priceBrl:            parseFloat(row.priceBrl) || 0,
        priceUsd:            parseFloat(row.priceUsd) || 0,
        label:               safeStr(row.label),
        status:              safeStr(row.status).toUpperCase() || 'DISPONÍVEL',
        email_status:        safeStr(row.email_status),
        links_status:        safeStr(row.links_status),
        promo_code:          safeStr(row.promo_code),
        level:               safeStr(row.level),
        recursos:            safeStr(row.recursos),
        miticos:             splitList(row.miticos),
        principais_lendarios: splitList(row.principais_lendarios),
        outros_lendarios:    splitList(row.outros_lendarios),
        prints:              splitList(row.prints),
        whatsapp:            safeStr(row.whatsapp),
        vendedor:            safeStr(row.vendedor),
        tipo:                safeStr(row.tipo).toLowerCase(),
        destaque:            safeStr(row.destaque)
    };
}
