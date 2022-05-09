// IntersectionObserver オブジェクトを作成
// 交差時に実行するコールバック関数を渡す
const observer = new IntersectionObserver((entries) => {
    // entriesは監視対象すべてが入っているリスト  
    for(const e of entries) {
       // isIntersecting プロパティは交差しているかどうかの真偽値
       // viewport に交差し、入ったときに isIntersecting === true、出たときに false になる
       if(e.isIntersecting) {
         document.getElementById('headerBG').style.position = 'static';
       } else {
         document.getElementById('headerBG').style.position = 'fixed';
       }
     }
   });
 
   // observe メソッドに監視対象要素を引数として渡すことで監視されるようになります
   observer.observe(document.getElementById('box'))