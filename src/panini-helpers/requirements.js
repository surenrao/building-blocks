module.exports = function(block) {
  let reqs = [];
  for(var i = 0; i < block.requirements.length; i ++) {
    let req = block.requirements[i];
    if(req.href) { 
      reqs.push('<a class="bb-requirements" href="' + req.href + '">' + req.text + '</a>');
    } else {
      reqs.push(req.text)
    }
  }
  return reqs.join(', ');
}
