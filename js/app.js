let activeClass = 0;

const app = new Vue({
    el : '#app',
    data : {
        //faccio un array di oggetti, ogni oggetto ha un immagine un titoloo e una descrizione
        carouselObjects : [
            {
                image : 'img/img-1.jpg',
                place : 'Capo Milazzo',
                description : 'Capo Milazzo è il capo col quale si conclude a ovest il golfo di Milazzo e inizia il golfo di Patti. Si trova nel territorio di Milazzo, comune italiano della città metropolitana di Messina.'
            },
            {
                image : 'img/img-2.jpg',
                place : 'Laghetti di Marinello',
                description : 'La riserva naturale orientata Laghetti di Marinello è un\'area naturale protetta situata nel comune di Patti, in provincia di Messina. La riserva occupa oltre 400 ettari ed è stata istituita nel 1998.'    
            },
            {
                image : 'img/img-3.jpg',
                place : 'Santa Tecla',
                description : 'Posta a nord-est di Acireale, Santa Tecla si adagia su una suggestiva piattaforma lavica: a Ovest si attacca alla lussureggiante e selvaggia Timpa "Falconiera" con la sua incolta flora mediterranea (oggi parco naturale protetto), mentre a Est si distende sul mare Ionio in una compatta e imponente scogliera di roccia vulcanica.'    
            },
            {
                image : 'img/img-4.jpg',
                place : 'Forza D\'Agrò',
                description : 'Forza d\'Agrò (\'a Forza in siciliano) è un comune italiano di 849 abitanti della città metropolitana di Messina in Sicilia.'    
            },
            {
                image : 'img/img-5.jpg',
                place : 'Capo Alì',
                description : 'La spiaggia di Capo Alì si trova poco distante dal centro di Alì Terme e si raggiunge con una camminata via spiaggia di circa 20 minuti.'    
            },
            {
                image : 'img/img-6.jpg',
                place : 'Vulcano Etna',
                description : 'L\'Etna è uno stratovulcano complesso della Sicilia originatosi nel Quaternario, ed è il più alto vulcano attivo della placca euroasiatica. Le sue frequenti eruzioni nel corso del tempo hanno modificato, a volte anche profondamente, il paesaggio circostante e in tante occasioni hanno costituito una minaccia per gli insediamenti abitativi nati nel tempo alle sue pendici. Il 21 giugno 2013, la XXXVII sessione del Comitato UNESCO ha inserito l\'Etna nell\'elenco dei beni costituenti il Patrimonio dell\'umanità.'    
            },
        ],
        //chiavi dell'oggetto data che passo al DOM tramite VUE
        vueSlider : 'main-title',
        vueSliderContent : 'VUE - Slider',
        carouselClass : 'item',
        carouselTitleClass : 'title',
        carouselDescriptionClass : 'description',
        controlClass : 'control-wrapper', 
        slide : undefined
    },
    //con mounted faccio eseguire il metodo slideCarousel appena la pagina viene caricata
    mounted: function(){
        this.slideCarousel();
    },
    methods : {
        //funzione che passa all'immagine successiva quando viene cliccata la freccetta in basso
        nextImg : function(){
            if(activeClass < this.carouselObjects.length -1){
                removeActive();
                activeClass++;
                addActive();
            }else{
                removeActive();
                activeClass = 0;
                addActive();
            }
        },
        //funzione che passa all'immagine precedente quando viene cliccata la freccetta in alto
        prevImg : function(){
            if(activeClass > 0){
                removeActive();
                activeClass--;
                addActive();
            }else{
                removeActive();
                activeClass = items.length - 1;
                addActive();
            }
        },
        //tramite v-for passo come parametro di questa funzione l'indice della thumb che viene cliccata
        //così da dargli la classe 'active'
        actualImg : function(index){
            removeActive();
            activeClass = index;
            addActive();
        },
        //creo un metodo che contiene una timing function che ogni tre secondi invoca la funzione nextImg
        slideCarousel: function () {
            console.log('mouse leave!!');
            this.slide = setInterval(this.nextImg, 3000);
        },
        stopSlideCarousel: function () {
            console.log('mouse over!!');
            clearInterval(this.slide);
        }
    }
});

const items = [...document.getElementsByClassName('item')];
items[activeClass].classList.add('active');
const overlayActive = [...document.getElementsByClassName('control-wrapper')];
overlayActive[activeClass].classList.add('active');

function removeActive(){
    items[activeClass].classList.remove('active');
    overlayActive[activeClass].classList.remove('active');
};

function addActive(){
    overlayActive[activeClass].classList.add('active');
    items[activeClass].classList.add('active');
}

