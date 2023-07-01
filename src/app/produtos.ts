export interface IProduto{

    id:number;
    descricao:string;
    preco:number;
    descricaoPreco:string;
    quantidadeEstoque: number;
    imagem:string;
    
}

export const produtos: IProduto[]= [
  
     {id:1, descricao: "Mouse gamer" , preco : 439.00 , descricaoPreco : "À vista no PIX" , imagem:"/assets/mouse-3.jpg" , quantidadeEstoque: 20},
     {id:2, descricao: "Monitor muito bom  " , preco : 1200.00 , descricaoPreco : "À vista no PIX" , imagem:"/assets/monitor-1.jpg" , quantidadeEstoque: 10},
     {id:3, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" , imagem:"/assets/fone-de-ouvido-1.jpg" ,quantidadeEstoque: 10 },
     {id:4, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" ,
     imagem:"/assets/fone-de-ouvido-2.jpg" , quantidadeEstoque: 10},
     {id:5, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" ,   imagem:"/assets/fone-de-ouvido-3.jpg" , quantidadeEstoque: 10},
     {id:6, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX"  , quantidadeEstoque: 10 , imagem:"/assets/hd.jpg"},
     {id:7, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" ,  quantidadeEstoque: 10 ,
     imagem:"/assets/laptop-1.jpg"},
     {id:8, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" ,  quantidadeEstoque: 10,
     imagem:"/assets/laptop-2.jpg"},
     {id:9, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" , quantidadeEstoque: 10,
     imagem:"/assets/mouse-1.png"},
     {id:10, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" , quantidadeEstoque: 10,
     imagem:"/assets/mouse-2.jpg"},
     {id:11, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" ,  quantidadeEstoque: 10,
     imagem:"/assets/mouse-4.jpg"},
     {id:12, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" ,  quantidadeEstoque: 10,
     imagem:"/assets/placa-video.jpg"},
     {id:13, descricao: " Teclado excelente  " , preco : 749.00 , descricaoPreco : "À vista no PIX" ,  quantidadeEstoque: 10,
     imagem:"/assets/processador.jpg"},

  

]