
var canvas, ctx, xw, xh;
var _body;
var lstBox = [];
class Box{
model = new Model();
    constructor(){
    this.model =new Model();
    }
}

 class Model{
    title = 'rectangule 1';
    backgroundColor = 'gray';
    auX = 10;
    auY = 10;
    width = 100;
    height = 100;
    textauX = 0;
    textauY = 0;
    textwidth = 100;
    textheight = 100;
    textAlign = 'left';
    textBaseline = 'middle';
    direction = 'ltr';
    recfill = { isfill: false, obj: null, fillRule: 'nonzero' };
    recstroke = { isStroke: false };
    isfragment = { index : 0, fr : 1 };
    lable = '';
    lables = [];
    fontColor = 'black';
    font = '1rem Arial';
    lastWidth = 0 ;
    lastHeight = 0;
    axle = 'x'; 
    spaceAround = 10;

    constructor(_model = {}){
        InitializedCanvas();
        if(Object.keys(_model).length !== 0){
        this.title =_model.title;
        this.backgroundColor = _model.backgroundColor;
        this.auX = _model.auX;
        this.auY = _model.auY;
        this.width = _model.width;
        this.height = _model.height;
        this.recfill = { isfill: false, obj: null, fillRule: 'nonzero' };
        this.recstroke = { isStroke: false };
        this.lable =  _model.lable;
        this.fontColor = _model.fontColor;
        this.font =_model.font;
        let y = _model.auY === 0 ? 10 * 1.5 : _model.auY * 1.5 ;
        let x = _model.auX === 0 ? 10 * 1.5 : _model.auX * 1.5 ;
        this.textauX = _model.textauX == null ? x  : _model.textauX;
        this.textauY = _model.textauY == null  ? y: _model.textauY;
        this.textwidth = _model.width;
        this.textheight = _model.height;
        this.textAlign = _model.textAlign;
        this.textBaseline = _model.textBaseline;
        this.direction  = _model.direction;
        this.lables = _model.lables;
        this.isfragment = _model.isfragment;
        this.lastWidth = this.getWidth();
        this.lastHeight = this.getHeight();
        console.log('LastSize', 'width:' +this.lastWidth+', height:'+this.lastHeigth)
        this.axle = _model?.axle  ? _model?.axle : 'x';
        this.spaceAround = _model?.spaceAround ? _model?.spaceAround : 10;
console.log('auxleCons',this.axle)
            if(this.lables?.length > 0 ){
                this.loadCells();
            }else{
                this.addModelBox();
            }

            lstBox.push(this)
            console.log('lstBox',lstBox)
        }
    }

    getWidth() {
        console.log('getWidth',this.lastWidth)
        return getSize(this.lastWidth, this.width, this.textwidth)
    }

    getHeight() {
        console.log('getHeight',this.lastHeigth)
        return getSize(this.lastHeight, this.height, this.textheight)
    }

    addModelBox() {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.auX, this.auY, this.width, this.height);
        ctx.fillStyle = this.fontColor;
        ctx.font = this.font;
        ctx.textAlign = this.textAlign;
        ctx.baseLine = this.textBaseline;
        ctx.fillText(this.lable, this.textauX, this.textauY);
        lstBox.push(this);
        console.log('adBox',lstBox);
    }
    loadCells(Model = this) {
        let _cellSize 
        let _startPosition 
        console.log('axle',Model?.axle)
        if (Model.lables.length > 0) {
            if(Model?.axle === 'x'){
                _cellSize = Model.width / Model.lables.length
                _startPosition = Model.auX;
            Model.lables.forEach(element => {
                //cria box
                ctx.fillStyle = Model.backgroundColor
                ctx.fillRect(_startPosition, Model.auY,_cellSize , Model.height)
                //cria rotulo
                ctx.fillStyle = Model.fontColor;
                ctx.font = Model.font;
                ctx.textAlign = Model.textAlign;
                ctx.baseLine = Model.textBaseline;
                ctx.fillText(element, _startPosition, (Model.auY) +this.spaceAround)
                _startPosition += _cellSize + this.spaceAround
               // _afterHeight = Model.height + spaceAround
            });
        }else
        if(Model?.axle === 'y'){
            _cellSize = Model.height / Model.lables.length
             _startPosition = Model.auY;
             Model.lables.forEach(element => {
                //cria box
                ctx.fillStyle = Model.backgroundColor
                ctx.fillRect(Model.auX, _startPosition, Model.width, _cellSize)
                //cria rotulo
                ctx.fillStyle = Model.fontColor;
                ctx.font = Model.font;
                ctx.textAlign = Model.textAlign;
                ctx.baseLine = Model.textBaseline;
                ctx.fillText(element, Model.auX, (_startPosition) + this.spaceAround)
                _startPosition += _cellSize + this.spaceAround
               // _afterHeight = Model.height + spaceAround
            });
            }
        }
    }
}
// function loadColumns(Model,spaceAround = 10,direction = 0) {
//     let _cellSize 
//     let _startPosition 
//     if (Model.lables.length > 0) {

//         if(direction === 0){
//          _cellSize = Model.width / Model.lables.length
//          _startPosition = Model.auX;
//         }else{
//         _cellSize = Model.height / Model.lables.length
//          _startPosition = Model.auY;
//         }
//         if(direction === 0){
//             _cellSize = Model.width / Model.lables.length
//             _startPosition = Model.auX;
//         Model.lables.forEach(element => {
//             //cria box
//             ctx.fillStyle = Model.backgroundColor
//             ctx.fillRect(_startPosition, Model.height, _cellSize, spaceAround)
//             //cria rotulo
//             ctx.fillStyle = Model.fontColor;
//             ctx.font = Model.font;
//             ctx.textAlign = Model.textAlign;
//             ctx.baseLine = Model.textBaseline;
//             ctx.fillText(element, _startPosition, (Model.height) + spaceAround)
//             _startPosition += _cellSize
//             _afterHeight = Model.height + spaceAround
//         });
//     }
//     }
// }
    //     class Rectangule {
    //         style;
    //         auX;
    //         auY;
    //         width;
    //         height;
    //         fill;
    //         stroke;

    //         constructor() {
    //             this.style = 'white';
    //             this.auX = 0;
    //             this.auY = 100;
    //             this.width = canvas.width;
    //             this.height = canvas.height;
    //             this.fill = { isfill: false, obj: null, fillRule: 'nonzero' };
    //             this.stroke = { isStroke: false };
    //         }
    //     }

    //   class TextContent {
    //         style;
    //         auX;
    //         auY;
    //         width;
    //         height;
    //         lable;
    //         font;
    //         textAlign;
    //         textBaseline;
    //         direction;
    //         constructor() {
    //             this.style = 'black';
    //             this.auX = 0;
    //             this.auY = 200;
    //             this.width = canvas.width;
    //             this.height = canvas.heigh;
    //             this.lable = '';
    //             this.font = '1rem Arial';
    //             this.textAlign = 'left';
    //             this.textBaseline = 'middle';
    //             this.direction = 'ltr';
    //         }
    //     }

    //      class ModelBox {
    //         rect;
    //         text;
    //         lastWidth;
    //         lastHeigth;

    //         constructor() {
    //             console.log('modelBoxConstructor',this)
    //             this.rect = new Rectangule();
    //             this.text = new TextContent();
    //             this.lastWidth = this.getWidth();
    //             this.lastHeigth = this.getHeight();
    //         }

    //         getWidth() {
    //             console.log('getWidth',this.lastWidth)
    //             return getSize(this.lastWidth, this.rect.width, this.text.width)
    //         }

    //         getHeight() {
    //             console.log('getHeight',this.lastHeigth)
    //             return getSize(this.lastHeigth, this.rect.height, this.text.height)
    //         }

    //     }

    //     class Body {
    //         boxes;
    //         box;
    //         constructor() {
    //             console.log('bodyConstructor',this)
    //             this.box = new ModelBox()
    //             this.boxes = [{box:this.box}]
    //             InitializedCanvas()
    //         }

    //         addBox() {
    //             console.log('addBox',this.box)
    //             ctx.fillStyle = this.box.rect.style;
    //             ctx.fillRect(this.box.rect.auX, this.box.rect.auY, this.box.rect.width, this.box.rect.height);
    //             ctx.fillStyle = this.box.text.style;
    //             ctx.font = this.box.text.font;
    //             ctx.textAlign = this.box.text.textAlign;
    //             ctx.baseLine = this.box.text.baseLine;
    //             ctx.fillText(this.box.text.lable, this.box.text.auX, this.box.text.auY)
    //         }

    //         addRangeBox() {
    //            this.boxes.forEach(item =>{
    //             console.log('addRangeBox',item);
    //             ctx.fillStyle = item.rect.style;
    //             ctx.fillRect(item.rect.auX, item.rect.auY, item.rect.width, item.rect.height);
    //             ctx.fillStyle = item.text.style;
    //             ctx.font = item.text.font;
    //             ctx.textAlign = item.text.textAlign;
    //             ctx.baseLine =item.text.baseLine;
    //             ctx.fillText(item.text.lable, item.text.auX,item.text.auY)
    //             });
    //         }

    //     }

        function getSize(size0, size1, size2) {
            console.log('getSize',size0)
            if (size0 < size1 || size0 < size2) {
                if (size1 <= size2) {
                    return size0 = size2
                } else {
                    return size0 = size1
                }
            }
            return size0
        }

        function InitializedCanvas(){
            this.canvas = document.getElementById('myCanvas');
            this.ctx = canvas.getContext('2d');
            this.xw = window.width / 1920;
            this.xh = window.height / 1080;
          return  this.ctx.scale(xw, xh);
        }


