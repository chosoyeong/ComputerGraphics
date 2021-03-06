class Classroom {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {

      var vertices = [
        //앞
          vec4(-4.0, -0.7,  -7.91, 1.0),
          vec4(-4.0,  3.6,  -7.91, 1.0),
          vec4(4.0,  3.6,  -7.91, 1.0),
          vec4(4.0, -0.7,  -7.91, 1.0),
          vec4(-4.0, -0.7, -7.9, 1.0),//5
          vec4(-4.0,  3.6, -7.9, 1.0),
          vec4(4.0,  3.6, -7.9, 1.0),
          vec4(4.0, -0.7, -7.9, 1.0),//8
          //뒤
          vec4(-4.0, -0.7,  7.91, 1.0),
          vec4(-4.0, 3.6, 7.91, 1.0),
          vec4(4.0,  3.6,  7.91, 1.0),
          vec4(4.0, -0.7,  7.91, 1.0),
          vec4(-4.0, -0.7, 7.9, 1.0),//5
          vec4(-4.0, 3.6, 7.9, 1.0),
          vec4(4.0,  3.6, 7.9, 1.0),
          vec4(4.0, -0.7, 7.9, 1.0),//8


          //바닥

          vec4(-4.0, -0.72,  7.9, 1.0),
          vec4(-4.0, -0.7,  7.9, 1.0),
          vec4(4.0,  -0.7,  7.9, 1.0),
          vec4(4.0, -0.72,  7.9, 1.0),
          vec4(-4.0, -0.72, -7.9, 1.0),//5 == 2
          vec4(-4.0, -0.7, -7.9, 1.0),
          vec4( 4.0, -0.7, -7.9, 1.0),
          vec4( 4.0, -0.72, -7.9, 1.0),//8 == 3
          //천장
          vec4(-4.0, 3.61,  7.9, 1.0),
          vec4(-4.0, 3.6,  7.9, 1.0),
          vec4(4.0,  3.6,  7.9, 1.0),
          vec4(4.0, 3.61,  7.9, 1.0),
          vec4(-4.0, 3.61, -7.9, 1.0),//5 == 2
          vec4(-4.0, 3.6, -7.9, 1.0),
          vec4( 4.0, 3.6, -7.9, 1.0),
          vec4( 4.0, 3.61, -7.9, 1.0),//8 == 3


          //오른쪽 옆면
          vec4(4.0, 3.6,  7.9, 1.0),
          vec4(4.0, -0.7, 7.9, 1.0),
          vec4(4.02, -0.7, 7.9, 1.0),
          vec4(4.02, 3.6,  7.9, 1.0),
          vec4(4.0, 3.6, -7.9, 1.0),//5 == 2
          vec4(4.0, -0.7, -7.9, 1.0),
          vec4( 4.02, -0.7, -7.9, 1.0),
          vec4( 4.02, 3.6, -7.9, 1.0),//8 == 3
          //왼쪽 옆면
          vec4(-4.0, 3.6,  7.9, 1.0),
          vec4(-4.0, -0.7,  7.9, 1.0),
          vec4(-4.02, -0.7, 7.9, 1.0),
          vec4(-4.02, 3.6,  7.9, 1.0),
          vec4(-4.0, 3.6, -7.9, 1.0),//5 == 2
          vec4(-4.0, -0.7, -7.9, 1.0),
          vec4(-4.02, -0.7, -7.9, 1.0),
          vec4(-4.02, 3.6, -7.9, 1.0),//8 == 3
      ];

      var vertexColors = [
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),

        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),

        //바닥
        vec4( 0.4, 0.2, 0.0, 1.0 ),  // white
        vec4( 0.4, 0.2, 0.0, 1.0 ),  // white
        vec4( 0.4, 0.2, 0.0, 1.0 ),  // white
        vec4( 0.4, 0.2, 0.0, 1.0 ),  // white
        vec4( 0.4, 0.2, 0.0, 1.0 ),  // white
        vec4( 0.4, 0.2, 0.0, 1.0 ),  // white
        vec4( 0.4, 0.2, 0.0, 1.0 ),  // white
        vec4( 0.4, 0.2, 0.0, 1.0 ),  // white

        // vec4(0.9, 0.9, 0.9, 1.0),
        // vec4(0.9, 0.9, 0.9, 1.0),
        // vec4(0.9, 0.9, 0.9, 1.0),
        // vec4(0.9, 0.9, 0.9, 1.0),
        // vec4(0.9, 0.9, 0.9, 1.0),
        // vec4(0.9, 0.9, 0.9, 1.0),
        // vec4(0.9, 0.9, 0.9, 1.0),
        // vec4(0.9, 0.9, 0.9, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),

        // vec4( 1.0, 1.0, 1.0, 1.0 ),  // yellow
        // vec4( 1.0, 1.0, 1.0, 1.0 ),  // yellow
        // vec4( 1.0, 1.0, 1.0, 1.0 ),  // yellow
        // vec4( 1.0, 1.0, 1.0, 1.0 ),  // yellow
        // vec4( 1.0, 1.0, 1.0, 1.0 ),  // yellow
        // vec4( 1.0, 1.0, 1.0, 1.0 ),  // yellow
        // vec4( 1.0, 1.0, 1.0, 1.0 ),  // yellow
        // vec4( 1.0, 1.0, 1.0, 1.0 ),  // yellow

        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),

        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
      ];

      this.GetVertexColor(vertices, vertexColors, pointsArray, colorsArray);
    }

    static GetVertexColor(vertices, vertexColors, pointsArray, colorsArray){

      for(var i = 0 ; i < 6 ; i++){
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 1 + (8*i), 0 + (8*i), 3 + (8*i), 2 + (8*i));
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 2 + (8*i), 3 + (8*i), 7 + (8*i), 6 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 3 + (8*i), 0 + (8*i), 4 + (8*i), 7 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 6 + (8*i), 5 + (8*i), 1 + (8*i), 2 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 4 + (8*i), 5 + (8*i), 6 + (8*i), 7 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 5 + (8*i), 4 + (8*i), 0 + (8*i), 1 + (8*i) );
      }
      var texCoord=[ //
        vec2(0.49, 0.0),//오른쪽 아래
        vec2(0.25, 0.0),//왼쪽 아래
        vec2(0.25, 0.5),//왼쪽 위
        vec2(0.49, 0.5),//오른쪽 위
      ];

      for(var i = 0;i<12;i++){
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[1]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[3]);
      }
      texCoord=[ //
        vec2(0.0, 0.0),//왼쪽 위
        vec2(0.0, 0.5),//왼쪽 아래
        vec2(0.25, 0.5),//오른쪽 아래
        vec2(0.25, 0.0),//오른쪽 위
      ];
      for(var i = 0;i<6;i++){
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[1]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[3]);
      }
      texCoord=[ //
        vec2(0.448, 0.5),//오른쪽 아래
        vec2(0.25, 0.5),//왼쪽 아래
        vec2(0.25, 1.0),//왼쪽 위
        vec2(0.448, 1.0),//오른쪽 위
      ];
      for(var i = 0;i<6;i++){
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[1]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[3]);
      }
      // ];
      // for(var i = 0;i<36;i++){
      //   texCoordsArray.push(vec2(0, 0));
      // }
      var texCoord=[ //
        vec2(0.49, 0.0),//오른쪽 아래
        vec2(0.25, 0.0),//왼쪽 아래
        vec2(0.25, 0.5),//왼쪽 위
        vec2(0.49, 0.5),//오른쪽 위
      ];
      for(var i = 0;i<12;i++){
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[1]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[3]);
      }

    }
	// Draw Vertex
    static GetDraw(drawlist) {
        var scale = vec4(0.5, 0.5, 0.5, 1.0);

        drawlist.push([gl.TRIANGLES, 216, scale]);
        return drawlist;
    }


    static quad(vertices, vertexColors, pointsArray, colorsArray, a, b, c, d) {
         pointsArray.push(vertices[a]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[b]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[c]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[a]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[c]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[d]);
         colorsArray.push(vertexColors[a]);
    }


    static DrawCycleColor(colors, color) {
        for (var i = 0; i < 362; i++) {
            colors.push(color);
        }
    }
    static DrawCycle(vertices, ox, oy, d, sx = 1, sy = 1) {
        var start = vertices.length;
        vertices.push(vec2(ox, oy));

        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
            var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
            vertices.push(vec2(x, y));
        }
        return [gl.TRIANGLE_FAN, start, 362];
    }
    static DrawRect(vertices, x1, y1, x2, y2) {
        vertices.push(vec2(x1, y1));
        vertices.push(vec2(x2, y1));
        vertices.push(vec2(x2, y2));
        vertices.push(vec2(x1, y2));
    }
    static DrawRectColor(colors, color) {
        for (var i = 0; i < 4; i++) {
            colors.push(color);
        }
    }
}
