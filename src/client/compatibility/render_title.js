function renderTitle(ctx, pixels, options) {

  var fill = options.fill;
  var stroke = options.stroke;
  var shadow1 = options.shadow1 || "#666";
  var shadow2 = options.shadow2 || "#888";

  var size = options.size || 1;
  var Xoffset = typeof(options.Xoffset) == 'undefined' ? 0 : options.Xoffset * size;
  var Yoffset = typeof(options.Yoffset) == 'undefined' ? 0 : options.Yoffset * size;

  // sort pixels in right order: ensuring the front of the blocks will be drawn over the sides
  var comparator = function(p1, p2) {
    return Xoffset * (p1.x-p2.x) || Yoffset * (p1.y-p2.y);
  }

  pixels.sort(comparator);

  for (var p=0 ; p<pixels.length ; p++) {
    var pixel = pixels[p];
    //console.log(pixel);
    var px = pixel.x * size;
    var py = pixel.y * size;

    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    if (fill) ctx.fillRect(px,py,size,size);
    if (stroke) ctx.strokeRect(px,py,size,size);

    // bottom shadow
    if (Yoffset > 0)
    {
      ctx.beginPath();
      ctx.moveTo(px,              py+size);
      ctx.lineTo(px+Xoffset,      py+size+Yoffset);
      ctx.lineTo(px+size+Xoffset, py+size+Yoffset);
      ctx.lineTo(px+size,         py+size);
      ctx.lineTo(px,              py+size);
      ctx.closePath();
      ctx.fillStyle = shadow1
      ctx.fill();
      if (stroke) ctx.stroke();
    }

    // top shadow
    if (Yoffset < 0)
    {
      ctx.beginPath();
      ctx.moveTo(px,              py);
      ctx.lineTo(px+Xoffset,      py+Yoffset);
      ctx.lineTo(px+size+Xoffset, py+Yoffset);
      ctx.lineTo(px+size,         py);
      ctx.lineTo(px,              py);
      ctx.closePath();
      ctx.fillStyle = shadow1
      ctx.fill();
      if (stroke) ctx.stroke();
    }

    // right shadow
    if (Xoffset > 0)
    {
      ctx.beginPath();
      ctx.moveTo(px+size,         py);
      ctx.lineTo(px+size+Xoffset, py+Yoffset);
      ctx.lineTo(px+size+Xoffset, py+size+Yoffset);
      ctx.lineTo(px+size,         py+size);
      ctx.lineTo(px+size,         py);
      ctx.closePath();

      ctx.fillStyle = shadow2
      ctx.fill();
      if (stroke) ctx.stroke();
    }

    // left shadow
    if (Xoffset < 0)
    {
      ctx.beginPath();
      ctx.moveTo(px,         py);
      ctx.lineTo(px+Xoffset, py+Yoffset);
      ctx.lineTo(px+Xoffset, py+size+Yoffset);
      ctx.lineTo(px,         py+size);
      ctx.lineTo(px,         py);
      ctx.closePath();

      ctx.fillStyle = shadow2
      ctx.fill();
      if (stroke) ctx.stroke();
    }
  }
}
