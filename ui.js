// 加载时有加载动画，延迟修改UI。（默认时5秒后执行）
setTimeout(() => {
  var self = this;
  self.clickFlag = false;

  var workspaceHeaderPadding = document.getElementById(
    'WorkspaceHeaderPadding'
  );
  var header = document.getElementsByTagName('header')[0];

  const onDisplay = () => {
    if (self.clickFlag === false) {
      // 正下面的语音按钮等不显示(关掉影响用户体验)
      // menuBar.style.display = 'none';
      menuBar.style.top = '50%';

      // header 不显示
      workspaceHeaderPadding.style.display = 'none';
      header.style.display = 'none';
      // 楼层选择不显示
      floorBar.style.display = 'none';
      toolBar.querySelectorAll('*:not(:last-child)').forEach(function (ele) {
        ele.style.display = 'none';
      });

      self.clickFlag = true;
    } else {
      // 正下面的语音按钮等显示(关掉影响用户体验)
      // menuBar.style.display = 'block';
      menuBar.style.top = 'calc(50% + 100px)';

      // header 显示
      workspaceHeaderPadding.style.display = 'block';
      header.style.display = 'block';
      // 楼层选择显示
      floorBar.style.display = 'block';
      toolBar.querySelectorAll('*:not(:last-child)').forEach((ele) => {
        ele.style.display = 'block';
      });

      self.clickFlag = false;
    }
  };

  // 添加自定义style标签（将按钮逆时针旋转用）
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('#MenuBar button { transform:rotate(-90deg); }');

  var floorBar = document.getElementsByClassName(
    'MuiPaper-root MuiPaper-outlined MuiPaper-rounded'
  )[0];
  floorBar.style.top = '20%';

  var menuBar = document.getElementById('MenuBar');
  // 给正下面的操作列表的列表览添加式样,将移动到最左边（共有画面时会遮住画面）
  menuBar.style.position = 'absolute';
  menuBar.style.left = '0';
  menuBar.style.top = 'calc(50% + 100px)';
  menuBar.style.transform = 'rotate(90deg)';

  var toolBar = document.getElementsByClassName(
    'MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root'
  )[0];
  var newDom = document.createElement('button');
  newDom.className =
    'MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium';
  newDom.style.border = '0px';
  newDom.style.fontSize = '1.5rem';
  newDom.style.width = '44px';
  newDom.style.height = '44px';
  newDom.style.backgroundColor = 'transparent';
  newDom.style.cursor = 'pointer';
  newDom.onclick = onDisplay;
  newDom.innerHTML +=
    '<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 32px; height: 32px; opacity: 1;" xml:space="preserve">' +
    '  <style type="text/css">' +
    '    .st0{fill:#4B4B4B;}' +
    '  </style>' +
    '  <g>' +
    '    <path class="st0" d="M495.334,388.192L269.003,161.857c-22.228-22.208-58.224-22.216-80.452,0' +
    '    	c-22.224,22.232-22.224,58.232,0,80.456l226.331,226.335c22.228,22.215,58.224,22.224,80.46,0' +
    '    	C517.558,446.416,517.55,410.424,495.334,388.192z M249.618,260.728l-39.745-39.737c-5.25-5.266-7.814-12.014-7.834-18.906' +
    '    	c0.02-6.893,2.585-13.64,7.834-18.898c5.258-5.25,12.01-7.818,18.898-7.835c6.892,0.016,13.644,2.585,18.91,7.835l39.737,39.745' +
    '    	L249.618,260.728z" style="fill: rgb(75, 75, 75);"></path>' +
    '    <path class="st0" d="M267.9,90.87l27.196,7.158c8.978,2.351,15.971,9.364,18.334,18.318l7.158,27.2' +
    '      c0.499,1.892,2.198,3.204,4.151,3.212c1.944,0,3.652-1.32,4.146-3.212l7.146-27.192c2.371-8.962,9.372-15.975,18.342-18.334' +
    '      l27.204-7.15c1.88-0.499,3.188-2.198,3.188-4.155c0-1.941-1.308-3.648-3.192-4.155l-27.2-7.15' +
    '      c-8.97-2.359-15.971-9.372-18.342-18.319l-7.146-27.2c-0.495-1.9-2.202-3.205-4.146-3.205c-1.952,0-3.652,1.304-4.151,3.188' +
    '      l-7.158,27.216c-2.348,8.946-9.356,15.96-18.334,18.327L267.9,82.561c-1.892,0.507-3.205,2.214-3.205,4.155' +
    '      C264.695,88.664,266.008,90.372,267.9,90.87z" style="fill: rgb(75, 75, 75);"></path>' +
    '    <path class="st0" d="M218.517,377.104l-20.396-5.37c-6.716-1.764-11.966-7.014-13.733-13.721l-5.359-20.38' +
    '    	c-0.374-1.416-1.643-2.391-3.116-2.391c-1.45,0-2.722,0.974-3.092,2.391l-5.359,20.38c-1.775,6.708-7.025,11.958-13.733,13.729' +
    '    	l-20.388,5.362c-1.405,0.371-2.408,1.651-2.408,3.1c0,1.466,1.002,2.738,2.408,3.117l20.388,5.362' +
    '    	c6.708,1.764,11.958,7.014,13.733,13.729l5.359,20.38c0.37,1.416,1.642,2.391,3.108,2.391c1.457,0,2.734-0.975,3.1-2.391' +
    '    	l5.359-20.38c1.767-6.716,7.017-11.966,13.733-13.729l20.396-5.362c1.397-0.379,2.38-1.651,2.392-3.1' +
    '    	C220.896,378.755,219.914,377.475,218.517,377.104z" style="fill: rgb(75, 75, 75);"></path>' +
    '    <path class="st0" d="M137.272,155.351c0.016-2.222-1.494-4.178-3.652-4.758l-31.101-8.172c-10.262-2.69-18.266-10.71-20.951-20.944' +
    '      l-8.205-31.113c-0.544-2.158-2.488-3.648-4.727-3.648c-2.23,0-4.174,1.49-4.746,3.648l-8.181,31.113' +
    '      c-2.69,10.234-10.706,18.254-20.956,20.936l-31.101,8.181c-2.158,0.58-3.668,2.536-3.652,4.758c0,2.206,1.51,4.172,3.652,4.743' +
    '      l31.101,8.181c10.25,2.697,18.266,10.701,20.964,20.951l8.173,31.105c0.559,2.158,2.516,3.64,4.739,3.64' +
    '      c2.246,0,4.191-1.482,4.734-3.64l8.205-31.121c2.686-10.234,10.689-18.239,20.94-20.936l31.113-8.181' +
    '      C135.762,159.522,137.272,157.557,137.272,155.351z" style="fill: rgb(75, 75, 75);"></path>' +
    '  </g>' +
    '</svg>';
  toolBar.appendChild(newDom);
}, 8000);
