import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png'

import antena2g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import node from '../../assets/Itens/nodeMcu.png';

import hdmi from '../../assets/Itens/hdmi.png';
import optico from '../../assets/Itens/optico.jpg';
import penDrive from '../../assets/Itens/penDrive.png';
import usbC from '../../assets/Itens/usbC.png';

const carrinho = {
    topo:{
        titulo:"Carrinho",
        imagem: topo
    },
    detalhes:{
        titulo:"Detalhes do Carrinho",
        tituloProduto:"Kit IoT",
        descricao:"Um kit IoT que revoluciona a vida dos estudantes",
        logoVendedor:logoVendedor,
        nomeVendedor:"Nuvem's Shopping",
        preco:"R$ 99,00"
    },
    itens:{
        titulo:"Itens do Carrinho",
        lista:[
            {
                nome:"Antena 2g/3g",
                imagem: antena2g,
            },
            {
                nome:"Antena Wifi",
                imagem: antenaWifi,
            },
            {
                nome:"Modem",
                imagem: modem,
            },
            {
                nome:"Node MCU",
                imagem: node,
            }
        ],
        lista2:[
            {
                nome:"Cabo HDMI",
                imagem: hdmi,
            },
            {
                nome:"Cabo Óptico",
                imagem: optico,
            },
            {
                nome:"Pen Drive",
                imagem: penDrive,
            },
            {
                nome:"Cabo USB-C",
                imagem: usbC,
            }
        ]
    }
}


export default carrinho;