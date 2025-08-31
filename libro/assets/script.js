const chapters = [
    'Nuestro primer mes juntos – Un nuevo comienzo lleno de perdón, esperanza y propósito.',
    'Nuestro segundo mes – El crecimiento de un amor sostenido por la fe y la familia.',
    'Nuestro tercer mes – Entre risas, pruebas y confianza, seguimos construyendo nuestro camino.',
    'Sueños compartidos – Lo que imaginamos de nuestro futuro.',
    'Momentos difíciles – Cómo nos fortalecemos en la fe y el amor.',
    'La bendición de la familia – Ser acogido como parte de tu hogar.',
    'La fe como guía – Dios en el centro de nuestro noviazgo.',
    'Amor y amistad – No solo novios, también mejores amigos.',
    'Nuestro compromiso – La promesa de un amor eterno.',
    'Hacia el matrimonio – Preparando nuestro “para siempre”.'
];

const pagesContent = [
    // Aquí puedes agregar el contenido de cada capítulo
    `<h3>Capítulo 1: Nuestro primer mes juntos</h3><p>Mi amor,</p><p>Hoy quiero detenerme un momento para recordar contigo algo que parece tan reciente y, al mismo tiempo, tan eterno: nuestro primer mes de noviazgo. Un mes que no fue simplemente el inicio de una relación, sino el inicio de un propósito, de un camino en el que nuestras manos se encontraron no por casualidad, sino porque así lo quiso Dios.</p><p>Recuerdo que cuando decidimos dar este paso, ambos llevábamos dentro historias, recuerdos, heridas y también sueños. No fue fácil abrir el corazón, pero lo hicimos con la certeza de que el amor verdadero no se mide por la perfección, sino por la decisión de caminar juntos, de perdonarnos y de sostenernos en medio de las pruebas.</p><p>En este primer mes, aprendí que amarte es aprender a ser paciente, a escuchar tu voz cuando me hablas con ternura y también cuando compartes tus miedos. Aprendí que cada mirada tuya guarda un mundo, y que cada sonrisa tuya tiene la fuerza de sanar mis días más oscuros.</p><p>Más allá de lo romántico, este mes me enseñó que nuestro noviazgo no es un simple “estar juntos”, sino caminar de la mano con Dios. Nos propusimos vivir un amor limpio, con propósito, con respeto y con fe. Porque entendimos que la verdadera felicidad no está en lo que tenemos, sino en lo que somos el uno para el otro: un regalo.</p><p>Me siento agradecido por tu perdón, por tu confianza, por dejarme entrar en tu vida como compañero y como amigo. Este primer mes es solo un pequeño reflejo de lo que sé que construiremos juntos: un amor que no se rinde, que se sostiene en la esperanza, que se levanta cuando tropieza y que se fortalece con cada día que pasa.</p><hr><strong>✨ Reflexión espiritual</strong><blockquote>La Biblia dice en Eclesiastés 4:9-10:<br>“Mejores son dos que uno; porque tienen mejor paga de su trabajo. Porque si cayeren, el uno levantará a su compañero.”</blockquote><p>Ese versículo me recuerda que nuestro noviazgo es un equipo. Que si alguna vez caemos, ahí estaremos para levantarnos, tomados de la mano y con la fe en Dios como nuestra guía.</p><p>Este primer mes fue un inicio hermoso, y aunque la vida traerá retos, estoy seguro de que nuestro amor, sostenido en la fe, crecerá cada día más fuerte.</p><p>Gracias por ser mi novia, mi amor y mi bendición. Este primer mes fue solo el prólogo de una historia eterna.</p>`,
    '<h3>Nuestro segundo mes</h3><p>Contenido del segundo capítulo...</p>',
    '<h3>Nuestro tercer mes</h3><p>Contenido del tercer capítulo...</p>',
    '<h3>Sueños compartidos</h3><p>Contenido de sueños compartidos...</p>',
    '<h3>Momentos difíciles</h3><p>Contenido de momentos difíciles...</p>',
    '<h3>La bendición de la familia</h3><p>Contenido de la bendición de la familia...</p>',
    '<h3>La fe como guía</h3><p>Contenido de la fe como guía...</p>',
    '<h3>Amor y amistad</h3><p>Contenido de amor y amistad...</p>',
    '<h3>Nuestro compromiso</h3><p>Contenido de nuestro compromiso...</p>',
    '<h3>Hacia el matrimonio</h3><p>Contenido de hacia el matrimonio...</p>'
];

let currentPage = 0;
const bookPages = document.getElementById('book-pages');
const bookIndex = document.getElementById('book-index');
const bookNavigation = document.getElementById('book-navigation');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
const backIndexBtn = document.getElementById('back-index');
const indexList = document.querySelectorAll('#book-index li');

function showPage(page) {
    bookPages.innerHTML = pagesContent[page];
    currentPage = page;
    prevBtn.disabled = page === 0;
    nextBtn.disabled = page === pagesContent.length - 1;
    bookPages.style.display = 'block';
    bookNavigation.style.display = 'flex';
    bookIndex.style.display = 'none';
    indexList.forEach((li, idx) => {
        li.style.fontWeight = idx === page ? 'bold' : 'normal';
        li.style.textDecoration = idx === page ? 'underline' : 'none';
    });
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) showPage(currentPage - 1);
});
nextBtn.addEventListener('click', () => {
    if (currentPage < pagesContent.length - 1) showPage(currentPage + 1);
});
indexList.forEach((li, idx) => {
    li.addEventListener('click', () => showPage(idx));
});
backIndexBtn.addEventListener('click', () => {
    bookPages.style.display = 'none';
    bookNavigation.style.display = 'none';
    bookIndex.style.display = 'block';
});

// Compartir enlace
const copyLinkBtn = document.getElementById('copy-link');
const copyMsg = document.getElementById('copy-msg');
copyLinkBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            copyMsg.style.display = 'inline';
            setTimeout(() => { copyMsg.style.display = 'none'; }, 1800);
        });
});

// Compartir desde el índice
const copyLinkIndexBtn = document.getElementById('copy-link-index');
const copyMsgIndex = document.getElementById('copy-msg-index');
copyLinkIndexBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            copyMsgIndex.style.display = 'inline';
            setTimeout(() => { copyMsgIndex.style.display = 'none'; }, 1800);
        });
});

// Mostrar solo el índice al cargar
bookPages.style.display = 'none';
bookNavigation.style.display = 'none';
bookIndex.style.display = 'block';
