// ============================================
// CONFIGURACIÓN - QUINIELA MUNDIAL 2026
// ============================================

// ⭐⭐⭐ TU URL DE APPS SCRIPT (YA INCLUIDA) ⭐⭐⭐
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzL9Dh3Ba7-T92Jc-5g6rD0sNXS7LmGnr8nbk_U4FcYVCkgDcw9u6gCmqgkMVeqSM9o/exec';

// Fases del Mundial
const FASES_MUNDIAL = ['grupos', 'dieciseisavos', 'octavos', 'cuartos', 'semis', 'final'];

// Puntuación
const PUNTOS_POR_ACIERTO = 3;

// ============================================
// PARTIDOS DEL MUNDIAL 2026
// ============================================

const PARTIDOS = {
    grupos: [
        { id: 1, grupo: "A", local: "México", visitante: "Sudáfrica", banderaL: "🇲🇽", banderaV: "🇿🇦", fecha: "11/06" },
        { id: 2, grupo: "A", local: "Corea del Sur", visitante: "República Checa", banderaL: "🇰🇷", banderaV: "🇨🇿", fecha: "11/06" },
        { id: 3, grupo: "B", local: "Canadá", visitante: "Bosnia", banderaL: "🇨🇦", banderaV: "🇧🇦", fecha: "12/06" },
        { id: 4, grupo: "D", local: "EE.UU.", visitante: "Paraguay", banderaL: "🇺🇸", banderaV: "🇵🇾", fecha: "12/06" },
        { id: 5, grupo: "B", local: "Catar", visitante: "Suiza", banderaL: "🇶🇦", banderaV: "🇨🇭", fecha: "13/06" },
        { id: 6, grupo: "C", local: "Brasil", visitante: "Marruecos", banderaL: "🇧🇷", banderaV: "🇲🇦", fecha: "13/06" },
        { id: 7, grupo: "C", local: "Haití", visitante: "Escocia", banderaL: "🇭🇹", banderaV: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", fecha: "13/06" },
        { id: 8, grupo: "D", local: "Australia", visitante: "Turquía", banderaL: "🇦🇺", banderaV: "🇹🇷", fecha: "13/06" },
        { id: 9, grupo: "E", local: "Alemania", visitante: "Curazao", banderaL: "🇩🇪", banderaV: "🇨🇼", fecha: "14/06" },
        { id: 10, grupo: "F", local: "Países Bajos", visitante: "Japón", banderaL: "🇳🇱", banderaV: "🇯🇵", fecha: "14/06" },
        { id: 11, grupo: "E", local: "Costa de Marfil", visitante: "Ecuador", banderaL: "🇨🇮", banderaV: "🇪🇨", fecha: "14/06" },
        { id: 12, grupo: "F", local: "Suecia", visitante: "Túnez", banderaL: "🇸🇪", banderaV: "🇹🇳", fecha: "14/06" },
        { id: 13, grupo: "H", local: "España", visitante: "Cabo Verde", banderaL: "🇪🇸", banderaV: "🇨🇻", fecha: "15/06" },
        { id: 14, grupo: "G", local: "Bélgica", visitante: "Egipto", banderaL: "🇧🇪", banderaV: "🇪🇬", fecha: "15/06" },
        { id: 15, grupo: "H", local: "Arabia Saudita", visitante: "Uruguay", banderaL: "🇸🇦", banderaV: "🇺🇾", fecha: "15/06" },
        { id: 16, grupo: "G", local: "Irán", visitante: "Nueva Zelanda", banderaL: "🇮🇷", banderaV: "🇳🇿", fecha: "15/06" }
    ],
    dieciseisavos: [
        { id: 101, local: "1° Grupo A", visitante: "3° Grupo C/D/E", banderaL: "🏆", banderaV: "⭐", fecha: "28/06" },
        { id: 102, local: "2° Grupo B", visitante: "2° Grupo A", banderaL: "🏆", banderaV: "🏆", fecha: "28/06" },
        { id: 103, local: "1° Grupo C", visitante: "3° Grupo A/B/F", banderaL: "🏆", banderaV: "⭐", fecha: "28/06" },
        { id: 104, local: "1° Grupo D", visitante: "3° Grupo B/E/F", banderaL: "🏆", banderaV: "⭐", fecha: "28/06" }
    ],
    octavos: [
        { id: 201, local: "Ganador 101", visitante: "Ganador 102", banderaL: "🏆", banderaV: "🏆", fecha: "03/07" },
        { id: 202, local: "Ganador 103", visitante: "Ganador 104", banderaL: "🏆", banderaV: "🏆", fecha: "03/07" }
    ],
    cuartos: [
        { id: 301, local: "Ganador 201", visitante: "Ganador 202", banderaL: "🏆", banderaV: "🏆", fecha: "09/07" }
    ],
    semis: [
        { id: 401, local: "Ganador 301", visitante: "Ganador 302", banderaL: "🏆", banderaV: "🏆", fecha: "14/07" }
    ],
    final: [
        { id: 501, local: "Ganador 401", visitante: "Ganador 402", banderaL: "🏆", banderaV: "🏆", fecha: "19/07" }
    ]
};

// Exportar
if (typeof window !== 'undefined') {
    window.APPS_SCRIPT_URL = APPS_SCRIPT_URL;
    window.FASES_MUNDIAL = FASES_MUNDIAL;
    window.PUNTOS_POR_ACIERTO = PUNTOS_POR_ACIERTO;
    window.PARTIDOS = PARTIDOS;
}
