
      //Clase Canvas
      class Canvas {
        constructor(canvas) {
            this.canvas = document.getElementById(canvas);
            this.ctx = this.canvas.getContext("2d");
        }

        drawRectangle(rectangle) {
            let x = Math.floor(Math.random() * (this.canvas.width - rectangle.width));
            let y = Math.floor(Math.random() * (this.canvas.height - rectangle.height));
            this.ctx.fillStyle = rectangle.color;
            this.ctx.fillRect(x, y, rectangle.width, rectangle.height);
        }
      }
      //Clase Rectangulo
      class Rectangle {
        constructor(width, height, color='black') {
            this.width = width;
            this.height = height;
            this.color = color;
        }
      }

      function draw() {
        let canvas = new Canvas("canvas");
        let rectangle = new Rectangle(50, 25);
        canvas.drawRectangle(rectangle);
      }
  
 




