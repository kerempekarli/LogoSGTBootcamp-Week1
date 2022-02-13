
# xmlHttpRequest Nedir? 


- Ajax teknolojisi Clientlerimizin sayfaya tıkladığı zaman bekleyip sıkılmaması için ortaya çıkmış bir teknolojidir. İnternet sayfasını yenilemeden kullanıcıya işlem yapma imkanı sağlanır ve sayfa gidip gelmez ve bekleme süresi ortadan kalmış olur.

- Ajax'ın kısaltmasınınaçılımı Asenkron JavaScript ve XML'dir ve asenkron olarak işlem yapmamıza yarar.

- XmlHttpRequest nesnesi Ajax teknolojisini kullanarak JavaScipt kodlarken bize yardımcı olmaktadır.




    ### XMLHttpRequest nesnesinin kullanımı

- ilk olarak html dosyamızın içinde **id değeri note** olan bir span oluşturuyoruz


```html
<span id=note><span>
```

- Daha sonra xhr değişkenine XMLHttpRequest objemizi atıyoruz.
- xhr objemizin içindeki onreadystatechange metoduna getnote() metodunu atıyoruz.
- Bu sayede kullanıcı bir değişiklik yaptığı zaman getnote metodu çalışacak ve istediğimiz şekilde response verebileceğiz.

** XMLHttpRequest Web sitesinin eş zamanlı olarak arka planda çalışan
olaylarını takip eder. XML CSS ve JavaScript ile
sonucun anında görülmesini sağlar.**


``` javascript
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function getnote(){
        //eğer readyState 0 a eşit olursa request tanımlanmamış anlamına geliyor

        // Eğer ready state 4 ise gönderdiğimiz sorgu almamız için hazır demektir. 
    if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("note").innerText = xhr.responseText;
        }
  }
    // open(“yöntem”, “adres”, “eşzamanlılık”;
     xhr.open("GET", "note.txt",true);
     /* send(“içerik”) – Sorguyu gönderir. Eğer metod POST iseparametreler içine yazılır GET ise içine null yazılır.*/
     xhr.send();

        // Bir değişiklik olduğu zaman html dosyamızın içinde bulunan spanımıza response textimizi yazdıracağız.
  
        //işlemin başlatılıp bitirilmesi gerekiyor bu yüzden xhr objemizin içinde bulunan open metodunu kullanarak gerekli parametreleri giriyoruz.
     
        //ilk paremetremiz get yapacağımız için get, ikinci parametremiz note.txt dosyamızı çekmek için, üçüncü parametremiz ise asenkron bir işlem olduğu için true.
   

  ```
    NOT : readState – Tam sayı değerleri durum bilgisini belirtir readyState özelliği 1,2,3,4 gibi 4 değer alır 4 oldugunda gönderdiğimiz sorgu almamız için hazır demektir
    ➢ 0 = uninitialized (başlatılmadı)
    ➢ 1 = loading (yükleniyor)
    ➢ 2 = loaded (yüklendi)
    ➢ 3 = interactive (etkileşimli)
    ➢ 4 = complete (tamamlandı)


    - KAYNAKLAR
    https://acikders.ankara.edu.tr/pluginfile.php/59357/mod_resource/content/0/Web%20Programlama%20II%20sunum%206.pdf

    https://youtu.be/Fis8V8JIpYE