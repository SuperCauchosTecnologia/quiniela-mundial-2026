// ============================================
// API - CONEXIÓN CON GOOGLE APPS SCRIPT
// ============================================

// Función principal para llamar al Apps Script
async function llamarAppsScript(accion, datos = {}) {
    try {
        console.log(`📡 Llamando a Apps Script: ${accion}`, datos);
        
        const response = await fetch(window.APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accion, ...datos })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const result = await response.json();
        console.log(`✅ Respuesta de ${accion}:`, result);
        return result;
        
    } catch (error) {
        console.error(`❌ Error en ${accion}:`, error);
        return { success: false, message: error.toString() };
    }
}

// ============================================
// USUARIOS
// ============================================

async function registrarUsuario(usuario, password, nombre) {
    if (!usuario || !password || !nombre) {
        return { success: false, message: '❌ Faltan datos' };
    }
    
    const result = await llamarAppsScript('registrarUsuario', { 
        usuario, 
        password, 
        nombre 
    });
    
    return result;
}

async function verificarCredenciales(usuario, password) {
    if (!usuario || !password) {
        return { success: false, message: '❌ Faltan datos' };
    }
    
    const result = await llamarAppsScript('verificarCredenciales', { 
        usuario, 
        password 
    });
    
    return result;
}

async function obtenerUsuarios() {
    const result = await llamarAppsScript('obtenerUsuarios');
    return result.usuarios || [];
}

// ============================================
// PRONÓSTICOS
// ============================================

async function guardarPronostico(usuario, fase, partidoId, pronostico) {
    const result = await llamarAppsScript('guardarPronostico', {
        usuario,
        fase,
        partido_id: partidoId,
        pronostico
    });
    return result.success;
}

async function cargarPronosticos(usuario) {
    const result = await llamarAppsScript('cargarPronosticos', { usuario });
    return result.pronosticos || {};
}

// ============================================
// RESULTADOS
// ============================================

async function guardarResultado(fase, partidoId, local, visitante, golesLocal, golesVisitante) {
    const result = await llamarAppsScript('guardarResultado', {
        fase,
        partido_id: partidoId,
        local,
        visitante,
        goles_local: golesLocal,
        goles_visitante: golesVisitante
    });
    return result.success;
}

async function cargarResultados(fase) {
    const result = await llamarAppsScript('cargarResultados', { fase });
    return result.resultados || {};
}

async function cargarTodosResultados() {
    const todos = {};
    for (const fase of window.FASES_MUNDIAL) {
        todos[fase] = await cargarResultados(fase);
    }
    return todos;
}

// ============================================
// PUNTOS
// ============================================

async function calcularPuntosUsuario(usuario) {
    const pronosticos = await cargarPronosticos(usuario);
    const resultados = await cargarTodosResultados();
    
    let puntos = 0;
    let aciertos = 0;
    
    for (const fase of window.FASES_MUNDIAL) {
        const resultadosFase = resultados[fase] || {};
        const pronosticosFase = pronosticos[fase] || {};
        
        for (const partido of window.PARTIDOS[fase] || []) {
            const pronostico = pronosticosFase[partido.id];
            const resultado = resultadosFase[partido.id];
            
            if (pronostico && resultado && resultado.goles_local !== undefined) {
                let resultadoReal = resultado.goles_local > resultado.goles_visitante ? '1' :
                                   resultado.goles_local === resultado.goles_visitante ? 'X' : '2';
                
                if (pronostico === resultadoReal) {
                    puntos += window.PUNTOS_POR_ACIERTO;
                    aciertos++;
                }
            }
        }
    }
    
    return { puntos, aciertos };
}

async function calcularTodosPuntajes() {
    const usuarios = await obtenerUsuarios();
    const puntajes = [];
    
    for (const u of usuarios) {
        if (u.rol === 'admin') continue;
        const { puntos, aciertos } = await calcularPuntosUsuario(u.usuario);
        puntajes.push({
            usuario: u.usuario,
            nombre: u.nombre,
            puntos: puntos,
            aciertos: aciertos
        });
    }
    
    return puntajes.sort((a, b) => b.puntos - a.puntos);
}

// Exportar
if (typeof window !== 'undefined') {
    window.registrarUsuario = registrarUsuario;
    window.verificarCredenciales = verificarCredenciales;
    window.obtenerUsuarios = obtenerUsuarios;
    window.guardarPronostico = guardarPronostico;
    window.cargarPronosticos = cargarPronosticos;
    window.guardarResultado = guardarResultado;
    window.cargarResultados = cargarResultados;
    window.cargarTodosResultados = cargarTodosResultados;
    window.calcularPuntosUsuario = calcularPuntosUsuario;
    window.calcularTodosPuntajes = calcularTodosPuntajes;
    
    console.log('✅ API cargada correctamente');
    console.log('🔗 Conectando a:', window.APPS_SCRIPT_URL);
}
