alert('Sizda hozir random sonlar chiqishni boshlaydi');

let randomFrom10to100 = Math.floor(Math.random() * 100) + 10; 
alert(`Random orqali chiqqan son: ${randomFrom10to100}`);

confirm('Biz random sonni 2ga kopaytirmoqchi va bolmoqchimiz!');

let son1 = randomFrom10to100 * 2;

let son2 = son1 / 2;

let son3 = son2 % 3;

alert(`Random orqali chiqqan son: ${randomFrom10to100} edi.\n +
    Biz uni 2ga ko'paytirib ${son1} sonini chiqardik,\n +
    va shu sonni 2ga bo'lib: ${son2} sonini chiqardik,\n +
    va shu sonni 3ga bo'lgandagi qoldiq: ${son3} sonini chiqardik.`);