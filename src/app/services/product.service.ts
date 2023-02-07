import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [
    new Product(1, 'Realme 10s', 'Pantalla: 6.6 1080 x 2408 pixels | Amoled Procesador: Octa Core 2.4GHz RAM: 8GB Almacenamiento: 128GB/256GB Cámara: 50 Mpx · ƒ/1.8 Self 8 Mpx · ƒ/2.4 Batería: 5000 mAh Carga rápida: 33W', 120.00, 'https://review-plus.com/wp-content/uploads/2022/12/Realme-10s-Review-plus-1.jpg'),
    new Product(2, 'Huawei Mate 30 Pro RS', 'Pantalla: 6.53 1176 x 2400 pixels | Oled Procesador: Octa Core 2.86GHz RAM: 8GB Almacenamiento: 128GB/256GB/512GB Cámara: 40 Mpx · ƒ/1.6 Self 32 Mpx · ƒ/2.0 Batería: 4500 mAh Carga rápida: 40W', 130.00, 'https://www.celulares.com/fotos/huawei-mate-30-rs-porsche-design-83981-g-alt.jpg'),
    new Product(3, 'SAMSUNG S22', 'Pantalla: 6.1, 1080 x 2340 pixels, 120Hz | AMOLED \nProcesador: Samsung Exynos 2200 3.0GHz \nRAM: 8GB \nAlmacenamiento: 128GB/256GB \nExpansión: microSD \nCámara: 50MP+12MP +10MP \nCámara Frontal: 10 MP \nBatería: 3.700 mAh \nOS: Android 12 \nResistencia al agua limitada: IP68 \nCarga rápida: 25W', 899, 'https://xstorec.com/wp-content/uploads/2022/10/03-samsung-s22-ultra-burgundy-back-800x800.png'),
    new Product(4, 'XIAOMI REDMI 10 A', 'Pantalla: 6.5, 1080 x 2400 pixels \nProcesador: Mediatek Helio G88 2GHz \nRAM: 4GB/6GB \nAlmacenamiento: 64GB/128GB \nExpansión: microSD \nCámara: Cuádruple, 50MP+8MP +2MP+2MP \nBatería: 5000 mAh \nOS: Android 11', 155, 'https://xstorec.com/wp-content/uploads/2022/04/Xiaomi-Redmi-10-Gris.jpeg'),
    new Product(5, 'Tecno Pova', 'Pantalla: 6.8, 720 x 1640 pixels | AMOLED\nProcesador: MediaTek Helio G80\nRAM: 6GB\nAlmacenamiento: 128GB\nCámara: 13MP+2MP +2MP\nCámara Frontal: 16 MP\nBatería: 6000 mAh\nOS: Android 10\nCarga rápida: 18W carga rapida', 169, 'https://xstorec.com/wp-content/uploads/2022/10/TECNO-Tecno-Pova-445.jpg'),
    new Product(6, 'XIAOMI REDMI NOTE 11 PRO', 'Pantalla: 6.67″, 1080 x 2400 pixels \nProcesador: Mediatek Helio G96 2.05GHz \nRAM: 6GB/8GB \nAlmacenamiento: 64GB/128GB \nExpansión: microSD \nCámara: Cuádruple, 108MP+8MP +2MP+2MP \nBatería: 5000 mAh \nOS: Android 11', 279, 'https://xstorec.com/wp-content/uploads/2022/10/K16U_Blue_front800x80085.png'),
    new Product(7, 'IPHONE 11 PRO MAX', 'Pantalla: XDR 6.5″  \nProcesador: A13 Bionic \nRAM: 8GB \nAlmacenamiento: 64GB/256GB/512GB \nExpansión: microSD \nCámara: Triple 12MP 4K \nCámara Frontal: 12 MP \nBatería: 3.700 mAh \nOS: IOS 13 \nResistencia al agua limitada: IP68', 824, 'https://xstorec.com/wp-content/uploads/2022/12/11-pro-max-p-800x800.jpg'),
    new Product(8, 'SAMSUNG GALAXY A03', 'Pantalla: 6.5″ 720 x 1600 pixels \nProcesador: Octa-core 1.6GHz \nRAM: 4GB \nAlmacenamiento: 128GB/64GB/32GB\nExpansión: microSD \nCámara: 48MP+2MP \nCámara Frontal: 5 MP  \nBatería: 5000 mAh \nOS: Android 10 \nResistencia al agua limitada: IP53 \nCarga rápida: 33W', 130, 'https://xstorec.com/wp-content/uploads/2022/10/D_NQ_NP_935358-MEC50851808189_072022-O.jpg'),
    new Product(9, 'XIAOMI REDMI NOTE 11S', 'Pantalla: 6.43″, 1080 x 2400 pixels, 90hz | AMOLED \nProcesador: Helio G96 2.05GHz \nRAM: 6GB \nAlmacenamiento: 128GB \nExpansión: microSD de hasta 1TB \nCámara: Cuádruple, 108MP+8MP +2MP+2MP \nCámara Frontal: 16 MP \nBatería: 5000 mAh \nOS: Android 11 \nResistencia al agua limitada: IP53 \nCarga rápida: 33W', 246, 'https://xstorec.com/wp-content/uploads/2022/10/Redmi-Note-11S-Blanco-Perla800x80085.png'),
    new Product(10, 'IPHONE 11', 'Pantalla: 6.1″  \nProcesador: Apple A13 Bionic \nRAM: 4GB \nAlmacenamiento: 64GB/128GB/256GB \nExpansión: microSD \nCámara: Dual 12 MP 4K \nCámara Frontal: 12 MP \nBatería: 3110 mAh \nOS: IOS 16', 739, 'https://xstorec.com/wp-content/uploads/2020/11/iPhone-11_verde.png'),
    new Product(12,'IPHONE 8 PLUS','Pantalla:  5.5 pulgadas″ IPS 1920 x 1080 pixels \nProcesador: A11 Bionic \nRAM: 3GB \nAlmacenamiento: 64GB/256GB \nExpansión: no microSD \nCámara: 12MP \nCámara Frontal: 7MP \nBatería: 2.675 mAh \nOS: IOS 11 \nCarga rápida: 25W',699,'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP768/iphone8plus-2018.png'),
    new Product(13,'SAMSUNG S20 FE','Pantalla: 6.5″, 1080 x 2400 pixels, 120Hz | AMOLED \nProcesador: Samsung Exynos 990 \nRAM: 6GB/8GB \nAlmacenamiento: 128GB \nExpansión: microSD \nCámara: 12MP+12MP +8MP \nCámara Frontal: 32MP \nBatería: 4500 mAh \nOS: Android 10 \nResistencia al agua limitada: IP68 \nCarga rápida: 67W',449,'https://xstorec.com/wp-content/uploads/2022/10/s20.jpg'),
    new Product(14,'Huawei Enjoy 50','Pantalla: 6.75 720 x 1600 pixels | TFT LCD Procesador: Octa Core 2GHz RAM: 6GB/8GB Almacenamiento: 128GB/256GB Cámara: 13 Mpx · ƒ/1.8 Self 8 Mpx · ƒ/2.2 Batería: 6000 mAh Carga rápida: 22.5W',280,'https://cdn-files.kimovil.com/default/0007/46/thumb_645613_default_big.jpg'),
    new Product(15,'SAMSUNG GALAXY S10 PLUS','Pantalla: QHD+ de 6.4″ \nProcesador: Exynos 9820 octa-core/Snapdragon 855 \nRAM: 6GB/12GB \nAlmacenamiento: 128GB/512GB/1TB \nExpansión: microSD \nCámara: 12MP+12MP+16MP \nCámara Frontal: 10MP+8MP \nBatería: 4100 mAh \nOS: Android 11 \nCarga rápida: 35W',502.88,'https://xstorec.com/wp-content/uploads/2021/06/Samsun-s1-plus.png'),
    new Product(16,'XIAOMI REDMI 10C','Pantalla: LCD 6,71 pulgadas HD+ (1.650 x 720 píxeles) 169,59 x 76,56 x 8,29 mm 190 g \nProcesador: Snapdragon 680 \nRAM:4 GB LPDDR4X \nAlmacenamiento: 64 GB / 128 GB UFS 2.2 + microSD hasta 1 TB \nCámara Frontal: 5 MP f/2.2 \nCámara Principal: 50 MP f/1.8 \nBateria: 5.000 mAh \nCarga rápida:18 W \nOS: Android 11/MIUI 13',169,'https://xstorec.com/wp-content/uploads/2022/09/D_NQ_NP_635992-MLA49949491752_052022-O.jpg'),
    new Product(17,'SAMSUNG GALAXY S21 PLUS','Pantalla: 6.2″, 1080 x 2400 pixels \nProcesador: Snapdragon 888 2.84GHz / Exynos 2100 2.9GHz \nRAM: 8GB \nAlmacenamiento: 128GB/256GB \nExpansión: sin microSD \nCámara: Triple, 12MP+64MP+12MP \nBatería: 4000 mAh \nOS: Android 11',872,'https://xstorec.com/wp-content/uploads/2022/03/D_NQ_NP_754980-MEC47632790280_092021-O.jpg')

  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
