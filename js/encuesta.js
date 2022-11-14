function calcularRecomendacion(presupuesto, puntaje){
    // console.log("Hola, soy una función");

    if (presupuesto == 1  && puntaje<=260){  // incluye las 3 reglas en una sola
        var gabinete = document.getElementById('gabinete');
        gabinete.innerHTML = pc1.gabinete;
        var motherboard = document.getElementById('motherboard');
        motherboard.innerHTML = pc1.motherboard;
        var cpu = document.getElementById('cpu');
        cpu.innerHTML = pc1.cpu;
        var ram = document.getElementById('ram');
        ram.innerHTML = pc1.ram;
        var disco = document.getElementById('disco');
        disco.innerHTML = pc1.disco;
        var gpu = document.getElementById('gpu');
        gpu.innerHTML = pc1.gpu;
        var fuente = document.getElementById('fuente');
        fuente.innerHTML = pc1.fuente;
        document.getElementById("Pc_gabinete").src="./pcs/PC1/pc_GAB.png";
        document.getElementById("Pc_mother").src="./pcs/PC1/pc_MOT.png";
        document.getElementById("Pc_micro").src="./pcs/PC1/pc_CPU.png";
        document.getElementById("Pc_ram").src="./pcs/PC1/pc_RAM.png";
        document.getElementById("Pc_disco").src="./pcs/PC1/pc_DIS.png";
        document.getElementById("Pc_gpu").src="./pcs/PC1/pc_GPU.png";
        document.getElementById("Pc_fuente").src="./pcs/PC1/pc_FON.png";
    } else if(presupuesto == 2  && puntaje<=260){
        var gabinete = document.getElementById('gabinete');
        gabinete.innerHTML = pc2.gabinete;
        var motherboard = document.getElementById('motherboard');
        motherboard.innerHTML = pc2.motherboard;
        var cpu = document.getElementById('cpu');
        cpu.innerHTML = pc2.cpu;
        var ram = document.getElementById('ram');
        ram.innerHTML = pc2.ram;
        var disco = document.getElementById('disco');
        disco.innerHTML = pc2.disco;
        var gpu = document.getElementById('gpu');
        gpu.innerHTML = pc2.gpu;
        var fuente = document.getElementById('fuente');
        fuente.innerHTML = pc2.fuente;
        document.getElementById("Pc_gabinete").src="./pcs/PC2/pc_GAB.png";
        document.getElementById("Pc_mother").src="./pcs/PC2/pc_MOT.png";
        document.getElementById("Pc_micro").src="./pcs/PC2/pc_CPU.png";
        document.getElementById("Pc_ram").src="./pcs/PC2/pc_RAM.png";
        document.getElementById("Pc_disco").src="./pcs/PC2/pc_DIS.png";
        document.getElementById("Pc_gpu").src="./pcs/PC2/pc_GPU.png";
        document.getElementById("Pc_fuente").src="./pcs/PC2/pc_FON.png"; 
    } else if(presupuesto == 3  && puntaje<=260){
        var gabinete = document.getElementById('gabinete');
        gabinete.innerHTML = pc3.gabinete;
        var motherboard = document.getElementById('motherboard');
        motherboard.innerHTML = pc3.motherboard;
        var cpu = document.getElementById('cpu');
        cpu.innerHTML = pc3.cpu;
        var ram = document.getElementById('ram');
        ram.innerHTML = pc3.ram;
        var disco = document.getElementById('disco');
        disco.innerHTML = pc3.disco;
        var gpu = document.getElementById('gpu');
        gpu.innerHTML = pc3.gpu;
        var fuente = document.getElementById('fuente');
        fuente.innerHTML = pc3.fuente;
        document.getElementById("Pc_gabinete").src="./pcs/PC3/pc_GAB.png";
        document.getElementById("Pc_mother").src="./pcs/PC3/pc_MOT.png";
        document.getElementById("Pc_micro").src="./pcs/PC3/pc_CPU.png";
        document.getElementById("Pc_ram").src="./pcs/PC3/pc_RAM.png";
        document.getElementById("Pc_disco").src="./pcs/PC3/pc_DIS.png";
        document.getElementById("Pc_gpu").src="./pcs/PC3/pc_GPU.png";
        document.getElementById("Pc_fuente").src="./pcs/PC3/pc_FON.png"; 
    }else if(presupuesto == 2  && puntaje>260){
        var gabinete = document.getElementById('gabinete');
        gabinete.innerHTML = pc4.gabinete;
        var motherboard = document.getElementById('motherboard');
        motherboard.innerHTML = pc4.motherboard;
        var cpu = document.getElementById('cpu');
        cpu.innerHTML = pc4.cpu;
        var ram = document.getElementById('ram');
        ram.innerHTML = pc4.ram;
        var disco = document.getElementById('disco');
        disco.innerHTML = pc4.disco;
        var gpu = document.getElementById('gpu');
        gpu.innerHTML = pc4.gpu;
        var fuente = document.getElementById('fuente');
        fuente.innerHTML = pc4.fuente;
        document.getElementById("Pc_gabinete").src="./pcs/PC4/pc_GAB.png";
        document.getElementById("Pc_mother").src="./pcs/PC4/pc_MOT.png";
        document.getElementById("Pc_micro").src="./pcs/PC4/pc_CPU.png";
        document.getElementById("Pc_ram").src="./pcs/PC4/pc_RAM.png";
        document.getElementById("Pc_disco").src="./pcs/PC4/pc_DIS.png";
        document.getElementById("Pc_gpu").src="./pcs/PC4/pc_GPU.png";
        document.getElementById("Pc_fuente").src="./pcs/PC4/pc_FON.png"; 
    }else{
        var gabinete = document.getElementById('gabinete');
        gabinete.innerHTML = pc5.gabinete;
        var motherboard = document.getElementById('motherboard');
        motherboard.innerHTML = pc5.motherboard;
        var cpu = document.getElementById('cpu');
        cpu.innerHTML = pc5.cpu;
        var ram = document.getElementById('ram');
        ram.innerHTML = pc5.ram;
        var p_titulo_disc = document.getElementById('p_titulo_disc');
        p_titulo_disc.innerHTML = "<br>- Disco Duro: ";
        var disco = document.getElementById('disco');
        disco.innerHTML = pc5.disco;
        var gpu = document.getElementById('gpu');
        gpu.innerHTML = pc5.gpu;
        var fuente = document.getElementById('fuente');
        fuente.innerHTML = pc5.fuente;
        document.getElementById("Pc_gabinete").src="./pcs/PC5/pc_GAB.png";
        document.getElementById("Pc_mother").src="./pcs/PC5/pc_MOT.png";
        document.getElementById("Pc_micro").src="./pcs/PC5/pc_CPU.png";
        document.getElementById("Pc_ram").src="./pcs/PC5/pc_RAM.png";
        document.getElementById("Pc_disco").src="./pcs/PC5/pc_DIS.png";
        document.getElementById("Pc_gpu").src="./pcs/PC5/pc_GPU.png";
        document.getElementById("Pc_fuente").src="./pcs/PC5/pc_FON.png"; 
    }
}

const form = document.getElementById('form-contact-e');
let presupuesto;
let puntaje;

const pc1 = {
    gabinete: "Nox Hummer ZX",
    motherboard: "Gigabyte H410M S2",
    cpu: "Intel Pentium G5905",
    ram: "2x4GB GoodRam DDR4 2400MHz",
    disco: "Kingston A400 SSD 240GB",
    gpu: "GeForce GTX 1050Ti 4GB",
    fuente: "Corsair CV 550 Plus Bronze",
};

const pc2 = {
    gabinete: "Nox Hummer ZX",
    motherboard: "Asus Prime B450M-A",
    cpu: "AMD Ryzen 3 3100",
    ram: "8GB Kingston HyperX Fury Black DDR4 3000MHz",
    disco: "Kioxia EXCERIA 500GB SSD NVMe",
    gpu: "Gigabyte GeForce GTX 1660 6GB",
    fuente: "Corsair CV 550 Plus Bronze",
};

const pc3 = {
    gabinete: "Corsair Obsidian 750D Airﬂow",
    motherboard: "MSI Z490-A Pro o Asus Prime B550M-A",
    cpu: "Intel Core i5-10400F o AMD Ryzen 5 3600",
    ram: "16GB Kingston HyperX Fury Black DDR4 3200MHz",
    disco: "Samsung 980 500 GB M.2",
    gpu: "Gigabyte GeForce RTX 3060 8GB",
    fuente: "Corsair CX Series CX650M",
};

const pc4 = {
    gabinete: "Corsair Obsidian 750D Airﬂow",
    motherboard: "MSI Z490-A Pro o Asus Prime B550M-A",
    cpu: "Intel Core i7-10700F o AMD Ryzen 7 3700X",
    ram: "16GB Kingston HyperX Fury Black DDR4 3200MHz",
    disco: "Samsung 980 500 GB M.2",
    gpu: "Gigabyte GeForce RTX 3070 8GB",
    fuente: "Corsair CX Series CX650M",
};

const pc5 = {
    gabinete: "Corsair Obsidian 750D Airﬂow",
    motherboard: "Asus TUF Gaming Z590 Plus o Gigabyte X570 Aorus Ultra",
    cpu: "Intel Core i7-11700K o AMD Ryzen 7 5800X",
    ram: "32GB GSkill Trident Z 3600 Mhz",
    disco: "Samsung 980 PRO 1TB NVMe",
    gpu: "GeForce RTX 3080 10GB",
    fuente: "Corsair RM V2 750W 80Plus",
};

document.getElementById("botoncito2").addEventListener("click", function() {
    puntaje=0;

    if(document.getElementById('bajo').checked) {
        presupuesto = 1;
    }else if(document.getElementById('medio').checked) {
        presupuesto = 2;
    }else if(document.getElementById('alto').checked) {
        presupuesto = 3;
    }
    console.log(presupuesto);
    
    if(document.getElementById('hj_0_1').checked) {
        puntaje += 10;
    }else if(document.getElementById('hj_1_5').checked) {
        puntaje += 20;
    }else if(document.getElementById('hj_5_15').checked) {
        puntaje += 30;
    }else if(document.getElementById('hj_15').checked) {
        puntaje += 40;
    }

    if(document.getElementById('historia').checked) {
        puntaje += 10;
    }else if(document.getElementById('graficos').checked) {
        puntaje += 20;
    }else if(document.getElementById('jugabilidad').checked) {
        puntaje += 30;
    }else if(document.getElementById('dificultad').checked) {
        puntaje += 40;
    }

    if(document.getElementById('visitar').checked) {
        puntaje += 30;
    }else if(document.getElementById('interactuar').checked) {
        puntaje += 20;
    }else if(document.getElementById('pelear').checked) {
        puntaje += 10;
    }else if(document.getElementById('nivel').checked) {
        puntaje += 40;
    }

    if(document.getElementById('ms_nunca').checked) {
        puntaje += 10;
    }else if(document.getElementById('ms_camino').checked) {
        puntaje += 20;
    }else if(document.getElementById('ms_gustan').checked) {
        puntaje += 30;
    }else if(document.getElementById('ms_todas').checked) {
        puntaje += 40;
    }

    if(document.getElementById('tj_shooters').checked) {
        puntaje += 20;
    }else if(document.getElementById('tj_multijugador').checked) {
        puntaje += 40;
    }else if(document.getElementById('tj_aventuras').checked) {
        puntaje += 10;
    }else if(document.getElementById('tj_logica').checked) {
        puntaje += 30;
    }

    if(document.getElementById('jc_ninguno').checked) {
        puntaje += 10;
    }else if(document.getElementById('jc_1_2').checked) {
        puntaje += 20;
    }else if(document.getElementById('jc_3_5').checked) {
        puntaje += 30;
    }else if(document.getElementById('jc_6').checked) {
        puntaje += 40;
    }

    if(document.getElementById('tc_si').checked) {
        puntaje += 40;
    }else if(document.getElementById('tc_no').checked) {
        puntaje += 10;
    }

    if(document.getElementById('ip_necesitas').checked) {
        puntaje += 10;
    }else if(document.getElementById('ip_intercambio').checked) {
        puntaje += 20;
    }else if(document.getElementById('ip_raros').checked) {
        puntaje += 30;
    }else if(document.getElementById('ip_todos').checked) {
        puntaje += 40;
    }

    if(document.getElementById('rf_divertirme').checked) {
        puntaje += 30;
    }else if(document.getElementById('rf_amigos').checked) {
        puntaje += 20;
    }else if(document.getElementById('rf_no_aburrirme').checked) {
        puntaje += 10;
    }else if(document.getElementById('rf_competir').checked) {
        puntaje += 40;
    }

    // document.getElementsByClassName("p_titulo").style.display='block';
    var elems = document.getElementsByClassName('p_titulo');
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
    }



    console.log(puntaje);

    calcularRecomendacion(presupuesto, puntaje);

    return presupuesto;
});