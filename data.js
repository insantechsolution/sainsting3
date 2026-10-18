// Bank soalan Sains Tingkatan 3 (KSSM)
// Format: { b: tajuk bab, s: [ { t: tajuk subtopik, q: [ [soalan, [A,B,C,D], indeksJawapan(0=A..3=D)] ] } ] }
const DATA = [
{ b: "Bab 1: Rangsangan dan Gerak Balas", s: [
 { t: "1.1 Sistem Saraf Manusia", q: [
  ["Sistem saraf pusat terdiri daripada", ["otak dan saraf tunjang","saraf kranium dan saraf spina","otak dan saraf kranium","saraf tunjang dan saraf spina"], 0],
  ["Bahagian otak yang mengawal keseimbangan dan koordinasi pergerakan badan ialah", ["serebrum","medula oblongata","serebelum","hipotalamus"], 2],
  ["Neuron yang membawa impuls saraf dari reseptor ke sistem saraf pusat ialah", ["neuron motor","neuron deria","neuron perantaraan","neuron efektor"], 1],
  ["Medula oblongata mengawal tindakan luar kawal seperti", ["berjalan dan berlari","berfikir dan mengingat","bercakap dan menulis","denyutan jantung dan pernafasan"], 3],
  ["Antara berikut, yang manakah tindakan refleks?", ["Menarik tangan dengan cepat apabila tersentuh periuk panas","Menulis karangan","Menendang bola ke arah gol","Membaca buku"], 0]
 ]},
 { t: "1.2 Rangsangan dan Gerak Balas dalam Manusia", q: [
  ["Bahagian mata yang mengawal saiz pupil dan kuantiti cahaya yang masuk ialah", ["kornea","iris","kanta","retina"], 1],
  ["Sel fotoreseptor yang mengesan cahaya terletak pada", ["retina","kornea","koroid","sklera"], 0],
  ["Bahagian telinga yang menukarkan getaran bunyi kepada impuls saraf ialah", ["gegendang telinga","osikel","koklea","salur separuh bulat"], 2],
  ["Rabun dekat (hipermetropia) boleh dibetulkan dengan memakai cermin mata berkanta", ["cekung","silinder","satah","cembung"], 3],
  ["Imej yang jatuh pada bintik buta tidak dapat dilihat kerana bintik buta", ["tiada sel fotoreseptor","mempunyai terlalu banyak sel kon","terletak di hadapan kanta","dilitupi oleh iris"], 0]
 ]},
 { t: "1.3 Rangsangan dan Gerak Balas dalam Tumbuhan", q: [
  ["Gerak balas tumbuhan terhadap rangsangan cahaya dikenali sebagai", ["geotropisme","fototropisme","hidrotropisme","tigmotropisme"], 1],
  ["Pucuk tumbuhan menunjukkan", ["fototropisme positif dan geotropisme negatif","fototropisme negatif dan geotropisme positif","fototropisme positif dan geotropisme positif","fototropisme negatif dan geotropisme negatif"], 0],
  ["Akar tumbuhan tumbuh ke arah kawasan tanah yang lembap. Ini ialah", ["hidrotropisme negatif","geotropisme negatif","hidrotropisme positif","fototropisme positif"], 2],
  ["Daun pokok semalu menguncup apabila disentuh. Gerak balas ini ialah", ["fototropisme","hidrotropisme","geotropisme","gerak balas nastik"], 3],
  ["Sulur paut pokok timun membelit tiang penyokong. Ini menunjukkan", ["tigmotropisme","kemotropisme","fototropisme","hidrotropisme"], 0]
 ]},
 { t: "1.4 Kepentingan Gerak Balas terhadap Rangsangan dalam Haiwan Lain", q: [
  ["Kelawar dapat terbang dan mencari makanan dalam gelap dengan menggunakan", ["penglihatan stereoskopik","ekolokasi dengan gelombang ultrasonik","organ Jacobson","garis sisi"], 1],
  ["Organ Jacobson pada ular berfungsi untuk mengesan", ["cahaya","bunyi","bahan kimia di udara (bau)","tekanan air"], 2],
  ["Haiwan pemangsa seperti harimau mempunyai penglihatan stereoskopik. Kelebihannya ialah", ["dapat menganggar jarak mangsa dengan tepat","medan penglihatan sangat luas","dapat melihat di belakang kepala","dapat melihat dalam gelap sepenuhnya"], 0],
  ["Arnab mempunyai mata di sisi kepala. Kepentingan penglihatan monokular ini ialah", ["menganggar jarak dengan tepat","melihat warna dengan jelas","memfokus objek dekat","mengesan pemangsa dari pelbagai arah"], 3],
  ["Pendengaran stereofonik membolehkan haiwan", ["mendengar bunyi ultrasonik sahaja","menentukan arah datangnya bunyi","mendengar dalam air","mengesan getaran tanah"], 1]
 ]}
]},
{ b: "Bab 2: Respirasi", s: [
 { t: "2.1 Sistem Respirasi Manusia", q: [
  ["Antara berikut, yang manakah urutan laluan udara yang betul semasa menarik nafas?", ["Rongga hidung → trakea → farinks → bronkus → alveolus","Rongga hidung → farinks → trakea → bronkus → bronkiol → alveolus","Rongga hidung → bronkus → trakea → bronkiol → alveolus","Farinks → rongga hidung → trakea → bronkiol → bronkus"], 1],
  ["Struktur yang menyokong trakea supaya tidak kemek ialah", ["gelang rawan","otot interkosta","tulang rusuk","diafragma"], 0],
  ["Pertukaran gas antara udara dan darah berlaku di", ["trakea","bronkus","bronkiol","alveolus"], 3],
  ["Bulu hidung dan mukus dalam rongga hidung berfungsi untuk", ["memanaskan darah","menghasilkan oksigen","memerangkap habuk dan mikroorganisma","menyerap karbon dioksida"], 2],
  ["Lapisan otot yang memisahkan rongga toraks daripada rongga abdomen ialah", ["otot interkosta dalam","diafragma","pleura","otot interkosta luar"], 1]
 ]},
 { t: "2.2 Pergerakan dan Pertukaran Gas dalam Badan Manusia", q: [
  ["Semasa menarik nafas (tarikan nafas),", ["diafragma mengendur dan melengkung ke atas","otot interkosta luar mengendur","diafragma mengecut dan menjadi rata","tulang rusuk bergerak ke bawah dan ke dalam"], 2],
  ["Apabila isi padu rongga toraks bertambah, tekanan udara di dalamnya", ["berkurang, lalu udara masuk ke peparu","bertambah, lalu udara masuk ke peparu","berkurang, lalu udara keluar dari peparu","tidak berubah"], 0],
  ["Oksigen diangkut oleh darah ke sel badan dalam bentuk", ["karboksihemoglobin","plasma darah sahaja","asid karbonik","oksihemoglobin"], 3],
  ["Antara berikut, yang manakah BUKAN ciri alveolus yang membantu pertukaran gas?", ["Dinding setebal satu sel","Dikelilingi banyak kapilari darah","Dinding tebal dan kering","Luas permukaan yang besar"], 2],
  ["Berbanding udara sedutan, udara hembusan mengandungi", ["lebih banyak oksigen","lebih banyak karbon dioksida","kurang wap air","lebih banyak nitrogen sahaja"], 1]
 ]},
 { t: "2.3 Kesihatan Sistem Respirasi Manusia", q: [
  ["Bahan dalam asap rokok yang menyebabkan ketagihan ialah", ["nikotin","tar","karbon monoksida","sulfur dioksida"], 0],
  ["Tar dalam asap rokok boleh menyebabkan", ["rabun jauh","anemia","kanser peparu","kencing manis"], 2],
  ["Karbon monoksida berbahaya kerana ia", ["melarutkan dinding alveolus","bergabung dengan hemoglobin dan mengurangkan pengangkutan oksigen","menyebabkan ketagihan","membina rawan pada trakea"], 1],
  ["Penyakit emfisema menyebabkan", ["dinding alveolus rosak dan luas permukaan pertukaran gas berkurang","trakea menjadi lebih lebar","bilangan alveolus bertambah","kadar pernafasan menjadi perlahan dan mudah"], 0],
  ["Seorang murid sukar bernafas apabila terdedah kepada debunga kerana saluran bronkiolnya menyempit. Murid itu mungkin menghidap", ["emfisema","kanser peparu","tuberkulosis","asma"], 3]
 ]},
 { t: "2.4 Adaptasi dalam Sistem Respirasi", q: [
  ["Ikan menjalankan pertukaran gas melalui", ["kulit","insang","spirakel","peparu"], 1],
  ["Udara masuk ke dalam sistem trakea serangga melalui", ["spirakel","insang","stoma","lentisel"], 0],
  ["Katak boleh bernafas melalui kulitnya kerana kulitnya", ["tebal dan bersisik","kering dan keras","nipis, lembap dan banyak kapilari darah","dilitupi bulu"], 2],
  ["Ameba memperoleh oksigen melalui", ["insang","spirakel","peparu","resapan merentasi membran plasma"], 3],
  ["Penduduk yang tinggal di kawasan tanah tinggi mempunyai bilangan sel darah merah yang lebih tinggi. Ini kerana", ["udara di tanah tinggi lebih panas","kepekatan oksigen di tanah tinggi lebih rendah","mereka kurang bersenam","udara di tanah tinggi lebih tercemar"], 1]
 ]},
 { t: "2.5 Pertukaran Gas dalam Tumbuhan", q: [
  ["Pertukaran gas pada daun berlaku terutamanya melalui", ["stoma","lentisel","xilem","bulu akar"], 0],
  ["Pembukaan dan penutupan stoma dikawal oleh", ["sel epidermis","sel palisad","sel pengawal","sel span"], 2],
  ["Pada waktu siang yang terang, daun membebaskan lebih banyak oksigen kerana", ["respirasi berhenti sepenuhnya","kadar fotosintesis lebih tinggi daripada kadar respirasi","stoma tertutup","tumbuhan tidak memerlukan oksigen"], 1],
  ["Stoma terbuka apabila sel pengawal", ["kehilangan air dan menjadi flasid","mengecut","menyerap air dan menjadi segah","mati"], 2],
  ["Pertukaran gas pada batang pokok berkayu berlaku melalui", ["stoma","lentisel","floem","kloroplas"], 1]
 ]}
]},
{ b: "Bab 3: Pengangkutan", s: [
 { t: "3.1 Sistem Pengangkutan dalam Organisma", q: [
  ["Organisma unisel seperti paramesium tidak memerlukan sistem pengangkutan khusus kerana", ["ia tidak memerlukan oksigen","nisbah jumlah luas permukaan kepada isi padunya besar","ia hidup di darat","ia mempunyai jantung yang kecil"], 1],
  ["Fungsi utama sistem pengangkutan dalam organisma multisel ialah", ["menghasilkan tenaga","mencerna makanan","mengangkut bahan keperluan ke sel dan membawa bahan kumuh keluar","mengawal suhu persekitaran"], 2],
  ["Organisma kompleks memerlukan sistem pengangkutan kerana", ["kebanyakan selnya jauh dari permukaan badan","selnya tidak menjalankan respirasi","ia tidak memerlukan nutrien","resapan berlaku sangat pantas dalam badannya"], 0],
  ["Sistem pengangkutan dalam tumbuhan berbunga terdiri daripada", ["arteri dan vena","stoma dan lentisel","akar dan daun","xilem dan floem"], 3],
  ["Antara berikut, bahan yang perlu diangkut ke sel badan manusia ialah", ["oksigen dan glukosa","urea dan karbon dioksida","peluh dan urea","karbon dioksida sahaja"], 0]
 ]},
 { t: "3.2 Sistem Peredaran Darah", q: [
  ["Salur darah yang membawa darah keluar dari jantung ialah", ["vena","arteri","kapilari","venul"], 1],
  ["Pertukaran bahan antara darah dan sel badan berlaku di kapilari kerana dindingnya", ["tebal dan berotot","mempunyai injap","setebal satu sel","kenyal"], 2],
  ["Injap di dalam vena berfungsi untuk", ["mencegah darah mengalir berbalik","menambah tekanan darah","menapis darah","menghasilkan sel darah"], 0],
  ["Ruang jantung yang mengepam darah beroksigen ke seluruh badan ialah", ["atrium kanan","ventrikel kanan","atrium kiri","ventrikel kiri"], 3],
  ["Salur darah yang membawa darah beroksigen dari peparu ke jantung ialah", ["arteri pulmonari","vena kava","vena pulmonari","aorta"], 2]
 ]},
 { t: "3.3 Darah Manusia", q: [
  ["Sel darah merah mengangkut oksigen kerana mengandungi", ["hemoglobin","fibrinogen","antibodi","nukleus"], 0],
  ["Komponen darah yang membantu pembekuan darah ialah", ["plasma","sel darah merah","sel darah putih","platlet"], 3],
  ["Sel darah putih berfungsi untuk", ["mengangkut oksigen","melawan jangkitan penyakit","membekukan darah","mengangkut glukosa"], 1],
  ["Individu yang boleh menerima darah daripada semua kumpulan darah (penerima universal) ialah individu berkumpulan darah", ["A","B","AB","O"], 2],
  ["Plasma darah mengangkut bahan seperti", ["oksigen sahaja","platlet sahaja","hemoglobin","glukosa, hormon dan urea"], 3]
 ]},
 { t: "3.4 Pengangkutan dalam Tumbuhan", q: [
  ["Tisu yang mengangkut air dan garam mineral dari akar ke daun ialah", ["floem","xilem","epidermis","korteks"], 1],
  ["Floem mengangkut", ["air","garam mineral","makanan yang dihasilkan melalui fotosintesis","oksigen"], 2],
  ["Transpirasi ialah", ["kehilangan air dalam bentuk wap air melalui stoma","penyerapan air oleh bulu akar","pengangkutan makanan dalam floem","penghasilan oksigen oleh daun"], 0],
  ["Faktor yang MENINGKATKAN kadar transpirasi ialah", ["kelembapan udara yang tinggi","suhu persekitaran yang rendah","keamatan cahaya yang tinggi","udara yang tenang tanpa angin"], 2],
  ["Selepas lapisan kulit batang (termasuk floem) dibuang secara gelang, bahagian batang di atas gelang membengkak. Ini kerana", ["air terkumpul di atas gelang","makanan yang diangkut oleh floem terkumpul di atas gelang","xilem telah rosak","sel akar membesar"], 1]
 ]},
 { t: "3.5 Sistem Peredaran Darah dalam Haiwan dan Pengangkutan dalam Tumbuhan", q: [
  ["Jantung ikan mempunyai", ["dua ruang","tiga ruang","empat ruang","lima ruang"], 0],
  ["Dalam sistem peredaran darah ganda dua, darah", ["melalui jantung sekali dalam satu kitaran lengkap","tidak melalui peparu","melalui jantung dua kali dalam satu kitaran lengkap","mengalir dalam rongga badan tanpa salur"], 2],
  ["Jantung katak (amfibia) terdiri daripada", ["satu atrium dan satu ventrikel","dua atrium dan satu ventrikel","dua atrium dan dua ventrikel","satu atrium dan dua ventrikel"], 1],
  ["Persamaan antara sistem peredaran darah haiwan dan sistem pengangkutan tumbuhan ialah kedua-duanya", ["mempunyai jantung","mengangkut bahan ke seluruh badan organisma","mengangkut darah","mempunyai injap"], 1],
  ["Perbezaan utama sistem pengangkutan tumbuhan berbanding sistem peredaran darah manusia ialah tumbuhan", ["tidak mempunyai organ pengepam seperti jantung","tidak mengangkut air","mempunyai arteri dan vena","mengangkut oksigen melalui hemoglobin"], 0]
 ]}
]},
{ b: "Bab 4: Kereaktifan Logam", s: [
 { t: "4.1 Kepelbagaian Mineral", q: [
  ["Mineral ialah", ["sebatian buatan manusia di makmal","unsur atau sebatian semula jadi yang terdapat dalam kerak Bumi","bahan organik daripada tumbuhan","gas yang terdapat di atmosfera"], 1],
  ["Bauksit ialah bijih bagi logam", ["aluminium","besi","timah","kuprum"], 0],
  ["Kasiterit ialah mineral yang mengandungi", ["ferum oksida","plumbum sulfida","stanum oksida","aluminium oksida"], 2],
  ["Hematit mengandungi sebatian", ["kuprum karbonat","zink sulfida","kalsium karbonat","ferum oksida"], 3],
  ["Apabila batu kapur (kalsium karbonat) dipanaskan dengan kuat, hasil yang terbentuk ialah", ["kalsium oksida dan karbon dioksida","kalsium dan oksigen","kalsium hidroksida dan air","kalsium sulfida dan karbon"], 0]
 ]},
 { t: "4.2 Siri Kereaktifan Logam", q: [
  ["Antara logam berikut, yang manakah paling reaktif?", ["Zink","Kuprum","Magnesium","Kalium"], 3],
  ["Logam yang bertindak balas dengan oksigen menghasilkan", ["garam","oksida logam","hidrogen","karbon dioksida"], 1],
  ["Dalam siri kereaktifan logam, karbon terletak di antara", ["aluminium dan zink","kalium dan natrium","kuprum dan argentum","besi dan timah"], 0],
  ["Apabila dipanaskan dengan oksigen, logam yang menghasilkan nyalaan paling terang ialah", ["plumbum","kuprum","magnesium","besi"], 2],
  ["Dalam eksperimen kereaktifan logam dengan oksigen, kalium manganat(VII) dipanaskan untuk", ["membekalkan gas oksigen","menyerap haba","membekalkan karbon","menyejukkan logam"], 0]
 ]},
 { t: "4.3 Pengekstrakan Logam daripada Bijihnya", q: [
  ["Besi diekstrak daripada bijihnya dalam", ["sel elektrolisis","relau bagas","kukus","reaktor nuklear"], 1],
  ["Aluminium tidak boleh diekstrak menggunakan karbon kerana", ["aluminium kurang reaktif daripada karbon","aluminium ialah bukan logam","aluminium lebih reaktif daripada karbon","aluminium tidak wujud sebagai oksida"], 2],
  ["Batu kapur ditambah ke dalam relau bagas untuk", ["membekalkan oksigen","menurunkan suhu relau","menghasilkan besi","menyingkirkan bendasing seperti silika sebagai sanga"], 3],
  ["Persamaan perkataan bagi pengekstrakan timah ialah", ["stanum oksida + karbon → stanum + karbon dioksida","stanum + oksigen → stanum oksida","stanum oksida → stanum + karbon","stanum + karbon dioksida → stanum oksida + karbon"], 0],
  ["Antara berikut, yang manakah kesan negatif aktiviti perlombongan terhadap alam sekitar?", ["Menambah kesuburan tanah","Hakisan tanah dan pencemaran sungai","Menambah hutan simpan","Mengurangkan pencemaran udara"], 1]
 ]}
]},
{ b: "Bab 5: Termokimia", s: [
 { t: "5.1 Tindak Balas Endotermik dan Eksotermik", q: [
  ["Tindak balas endotermik ialah tindak balas yang", ["membebaskan haba ke persekitaran","menyerap haba dari persekitaran","tidak melibatkan perubahan haba","menghasilkan cahaya sahaja"], 1],
  ["Antara berikut, yang manakah contoh tindak balas eksotermik?", ["Pembakaran kayu","Fotosintesis","Pelarutan ammonium klorida dalam air","Penguraian kalsium karbonat oleh haba"], 0],
  ["Antara berikut, yang manakah contoh tindak balas endotermik?", ["Respirasi","Peneutralan asid oleh alkali","Fotosintesis","Pelarutan natrium hidroksida dalam air"], 2],
  ["Seorang murid melarutkan sejenis serbuk dalam air dan mendapati bacaan termometer menurun dari 28 °C ke 21 °C. Kesimpulannya, tindak balas itu", ["eksotermik kerana suhu menurun","endotermik kerana haba diserap dari persekitaran","eksotermik kerana haba dibebaskan","tidak melibatkan perubahan tenaga"], 1],
  ["Pek sejuk segera yang digunakan untuk merawat kecederaan sukan berfungsi berdasarkan", ["tindak balas endotermik","tindak balas eksotermik","pembakaran","pengaratan besi"], 0]
 ]}
]},
{ b: "Bab 6: Elektrik dan Kemagnetan", s: [
 { t: "6.1 Penjanaan Tenaga Elektrik", q: [
  ["Di stesen jana kuasa hidroelektrik, perubahan tenaga yang berlaku ialah", ["tenaga kimia → tenaga haba → tenaga elektrik","tenaga keupayaan graviti → tenaga kinetik → tenaga elektrik","tenaga nuklear → tenaga haba → tenaga elektrik","tenaga cahaya → tenaga elektrik"], 1],
  ["Antara berikut, yang manakah sumber tenaga boleh diperbaharui?", ["Arang batu","Gas asli","Tenaga suria","Petroleum"], 2],
  ["Penjana elektrik menghasilkan arus berdasarkan prinsip", ["aruhan elektromagnet","pembiasan cahaya","pantulan bunyi","pengaliran haba"], 0],
  ["Arus ulang-alik (a.u.) berbeza daripada arus terus (a.t.) kerana arus ulang-alik", ["mengalir dalam satu arah sahaja","dihasilkan oleh bateri","tidak boleh digunakan di rumah","berubah arah secara berkala"], 3],
  ["Magnitud arus aruhan dalam gegelung boleh ditambah dengan", ["mengurangkan bilangan lilitan gegelung","menggerakkan magnet dengan lebih laju","menggunakan magnet yang lebih lemah","menghentikan pergerakan magnet"], 1]
 ]},
 { t: "6.2 Transformer", q: [
  ["Transformer hanya boleh berfungsi dengan", ["arus terus","bateri","arus ulang-alik","sel suria sahaja"], 2],
  ["Dalam transformer injak naik,", ["bilangan lilitan gegelung sekunder lebih banyak daripada gegelung primer","bilangan lilitan gegelung primer lebih banyak daripada gegelung sekunder","voltan output lebih rendah daripada voltan input","bilangan lilitan kedua-dua gegelung sama"], 0],
  ["Sebuah transformer mempunyai 1000 lilitan pada gegelung primer dan 50 lilitan pada gegelung sekunder. Jika voltan input ialah 240 V, berapakah voltan output?", ["6 V","12 V","24 V","4800 V"], 1],
  ["Teras besi lembut berlamina digunakan dalam transformer untuk", ["menambah arus pusar","menukar a.u. kepada a.t.","mengurangkan kehilangan tenaga","menambah rintangan gegelung"], 2],
  ["Pengecas telefon bimbit menukar voltan 240 V kepada 5 V. Pengecas ini mengandungi", ["transformer injak naik","penjana","motor elektrik","transformer injak turun"], 3]
 ]},
 { t: "6.3 Penghantaran dan Pengagihan Tenaga Elektrik", q: [
  ["Tenaga elektrik dihantar pada voltan yang sangat tinggi supaya", ["arus menjadi besar","kehilangan tenaga dalam kabel dapat dikurangkan","kabel menjadi panas","pengguna mendapat voltan tinggi"], 1],
  ["Grid Nasional ialah", ["rangkaian kabel yang menghubungkan stesen jana kuasa dengan pengguna","sejenis stesen jana kuasa","papan suis di rumah","transformer injak naik"], 0],
  ["Dalam palam tiga pin, wayar bumi berwarna", ["coklat","biru","hijau dan kuning","merah"], 2],
  ["Fius dalam litar elektrik berfungsi untuk", ["menambah voltan","menyimpan tenaga elektrik","menukar a.u. kepada a.t.","memutuskan litar apabila arus berlebihan mengalir"], 3],
  ["Wayar bumi pada peralatan elektrik berpetala logam berfungsi untuk", ["mengalirkan arus bocor ke bumi supaya pengguna tidak terkena renjatan","membekalkan arus kepada peralatan","menambah kuasa peralatan","menyalakan lampu penunjuk"], 0]
 ]},
 { t: "6.4 Pengiraan Kos Penggunaan Tenaga Elektrik", q: [
  ["Unit yang digunakan oleh pembekal elektrik untuk mengira tenaga elektrik yang digunakan ialah", ["watt (W)","kilowatt jam (kWj)","volt (V)","ampere (A)"], 1],
  ["Sebuah peralatan disambungkan kepada bekalan 240 V dan arus 5 A mengalir melaluinya. Berapakah kuasanya?", ["48 W","245 W","1200 W","2400 W"], 2],
  ["Sebuah seterika berkuasa 1000 W digunakan selama 2 jam. Berapakah tenaga elektrik yang digunakan?", ["0.5 kWj","2 kWj","20 kWj","2000 kWj"], 1],
  ["Sebuah pemanas air 2 kW digunakan 30 minit setiap hari selama 30 hari. Jika tarif ialah 30 sen per kWj, berapakah kosnya?", ["RM4.50","RM9.00","RM18.00","RM90.00"], 1],
  ["Antara berikut, yang manakah cara menjimatkan penggunaan tenaga elektrik di rumah?", ["Membiarkan televisyen dalam mod sedia","Membuka pintu peti sejuk dengan kerap","Menggunakan lampu LED dan peralatan berpenarafan bintang tinggi","Memasang penyaman udara pada suhu 16 °C"], 2]
 ]}
]},
{ b: "Bab 7: Tenaga dan Kuasa", note: "Gunakan g = 10 N/kg (atau 10 m/s²) bagi semua pengiraan.", s: [
 { t: "7.1 Kerja, Tenaga dan Kuasa", q: [
  ["Kerja ditakrifkan sebagai", ["daya × masa","jisim × halaju","daya × sesaran dalam arah daya","tenaga ÷ masa"], 2],
  ["Ali menolak sebuah kotak dengan daya 50 N sejauh 4 m. Berapakah kerja yang dilakukan?", ["12.5 J","54 J","100 J","200 J"], 3],
  ["Sebuah motor melakukan kerja 600 J dalam masa 3 s. Berapakah kuasanya?", ["200 W","603 W","1800 W","0.005 W"], 0],
  ["Unit SI bagi kuasa ialah", ["joule","newton","watt","pascal"], 2],
  ["Dalam situasi manakah TIADA kerja dilakukan?", ["Mengangkat beg ke atas meja","Menolak dinding batu yang tidak bergerak","Menarik troli sejauh 5 m","Menaiki tangga"], 1]
 ]},
 { t: "7.2 Tenaga Keupayaan dan Tenaga Kinetik", q: [
  ["Sebuah objek berjisim 2 kg diletakkan pada ketinggian 5 m dari lantai. Berapakah tenaga keupayaan gravitinya?", ["10 J","50 J","100 J","1000 J"], 2],
  ["Sebiji bola berjisim 4 kg bergerak dengan halaju 3 m/s. Berapakah tenaga kinetiknya?", ["6 J","12 J","18 J","36 J"], 2],
  ["Antara berikut, yang manakah menyimpan tenaga keupayaan kenyal?", ["Busur panah yang diregangkan","Kereta yang bergerak","Air terjun","Bateri"], 0],
  ["Tenaga kinetik sesuatu objek bertambah apabila", ["jisimnya berkurang","ketinggiannya bertambah","halajunya berkurang","halajunya bertambah"], 3],
  ["Sebuah spring dimampatkan sejauh 0.1 m oleh daya 20 N. Berapakah tenaga keupayaan kenyal yang tersimpan? (Tenaga = ½ × F × x)", ["1 J","2 J","10 J","200 J"], 0]
 ]},
 { t: "7.3 Prinsip Keabadian Tenaga", q: [
  ["Prinsip keabadian tenaga menyatakan bahawa tenaga", ["boleh dicipta tetapi tidak boleh dimusnahkan","tidak boleh dicipta atau dimusnahkan, tetapi boleh berubah bentuk","sentiasa berkurang","hanya wujud dalam bentuk haba"], 1],
  ["Pada kedudukan tertinggi ayunan sebuah bandul ringkas,", ["tenaga keupayaan graviti adalah maksimum","tenaga kinetik adalah maksimum","halaju adalah maksimum","jumlah tenaga adalah sifar"], 0],
  ["Sebiji kelapa jatuh dari pokok. Perubahan tenaga yang berlaku ialah", ["tenaga kinetik → tenaga keupayaan graviti","tenaga kimia → tenaga kinetik","tenaga keupayaan graviti → tenaga kinetik","tenaga kenyal → tenaga bunyi"], 2],
  ["Sebuah bandul yang berayun akhirnya berhenti kerana", ["tenaga telah dimusnahkan","jisim bandul berkurang","graviti hilang","tenaga berubah menjadi tenaga haba dan bunyi akibat rintangan udara"], 3],
  ["Sebiji bola berjisim 0.5 kg dijatuhkan dari ketinggian 20 m. Dengan mengabaikan rintangan udara, berapakah tenaga kinetik bola sejurus sebelum menyentuh tanah?", ["10 J","40 J","100 J","200 J"], 2]
 ]}
]},
{ b: "Bab 8: Keradioaktifan", s: [
 { t: "8.1 Penemuan Keradioaktifan", q: [
  ["Ahli sains yang mula-mula menemui keradioaktifan pada tahun 1896 ialah", ["Henri Becquerel","Isaac Newton","Michael Faraday","Albert Einstein"], 0],
  ["Marie Curie dan Pierre Curie menemui unsur radioaktif", ["uranium dan torium","polonium dan radium","karbon dan iodin","kobalt dan natrium"], 1],
  ["Keradioaktifan ialah proses", ["nukleus stabil bergabung secara terkawal","elektron berpindah antara atom","nukleus tidak stabil mereput secara rawak dan spontan sambil memancarkan sinaran","atom menyerap cahaya"], 2],
  ["Unit SI bagi keaktifan radioaktif ialah", ["becquerel (Bq)","joule (J)","watt (W)","tesla (T)"], 0],
  ["Separuh hayat sejenis bahan radioaktif ialah 5 hari. Berapakah jisim yang tinggal daripada 80 g bahan itu selepas 15 hari?", ["40 g","20 g","10 g","5 g"], 2]
 ]},
 { t: "8.2 Atom dan Nukleus", q: [
  ["Nukleus atom mengandungi", ["proton dan elektron","neutron dan elektron","elektron sahaja","proton dan neutron"], 3],
  ["Zarah subatom yang bercas negatif ialah", ["proton","elektron","neutron","nukleon"], 1],
  ["Nombor proton sesuatu atom ialah", ["bilangan proton dalam nukleus","bilangan neutron dalam nukleus","jumlah proton dan neutron","jumlah proton dan elektron"], 0],
  ["Sebuah atom natrium mempunyai nombor nukleon 23 dan nombor proton 11. Berapakah bilangan neutronnya?", ["11","12","23","34"], 1],
  ["Isotop ialah atom bagi unsur yang sama yang mempunyai", ["bilangan proton yang berbeza","bilangan elektron yang berbeza","bilangan neutron yang berbeza","sifat kimia yang berbeza"], 2]
 ]},
 { t: "8.3 Sinaran Mengion dan Sinaran Tidak Mengion", q: [
  ["Sinaran radioaktif yang mempunyai kuasa pengionan paling tinggi ialah", ["sinaran gama","zarah beta","zarah alfa","sinar-X"], 2],
  ["Sinaran yang mempunyai kuasa penembusan paling tinggi dan hanya dapat dikurangkan oleh plumbum tebal ialah", ["sinaran gama","zarah alfa","zarah beta","cahaya nampak"], 0],
  ["Zarah alfa boleh dihalang sepenuhnya oleh", ["kepingan aluminium tebal","plumbum setebal 10 cm","konkrit","sehelai kertas"], 3],
  ["Antara berikut, yang manakah sinaran tidak mengion?", ["Zarah alfa","Gelombang radio","Sinaran gama","Zarah beta"], 1],
  ["Antara berikut, yang manakah sumber semula jadi sinaran latar belakang?", ["Mesin sinar-X hospital","Ujian senjata nuklear","Gas radon dan sinaran kosmik","Telefon bimbit"], 2]
 ]},
 { t: "8.4 Kegunaan Sinaran Radioaktif", q: [
  ["Kobalt-60 digunakan dalam bidang perubatan untuk", ["merawat kanser melalui radioterapi","mengesan usia fosil","menjana elektrik","mengukur ketebalan kertas"], 0],
  ["Usia artifak dan fosil purba boleh ditentukan menggunakan", ["iodin-131","natrium-24","kobalt-60","karbon-14"], 3],
  ["Iodin-131 digunakan untuk merawat penyakit pada", ["jantung","kelenjar tiroid","tulang","peparu"], 1],
  ["Dalam industri makanan, sinaran gama digunakan untuk", ["menambah rasa makanan","mewarnakan makanan","membunuh mikroorganisma supaya makanan tahan lama","memanaskan makanan"], 2],
  ["Antara berikut, yang manakah langkah keselamatan semasa mengendalikan bahan radioaktif?", ["Memegang bahan dengan tangan","Menyimpan bahan dalam bekas plumbum dan menggunakan penyepit panjang","Menyimpan bahan dalam kotak kertas","Membawa bahan di dalam poket baju"], 1]
 ]}
]},
{ b: "Bab 9: Cuaca Angkasa Lepas", s: [
 { t: "9.1 Aktiviti Matahari yang Memberi Kesan kepada Bumi", q: [
  ["Lapisan atmosfera Matahari yang paling luar ialah", ["fotosfera","kromosfera","korona","zon perolakan"], 2],
  ["Tompok Matahari kelihatan gelap kerana", ["suhunya lebih rendah berbanding kawasan sekelilingnya","ia dilitupi awan","ia tidak memancarkan sebarang cahaya","suhunya lebih tinggi berbanding kawasan sekelilingnya"], 0],
  ["Letusan tenaga yang besar dan berlaku secara tiba-tiba di permukaan Matahari dikenali sebagai", ["tompok Matahari","nyalaan suria","gerhana","fotosfera"], 1],
  ["Angin suria ialah", ["angin yang bertiup di permukaan Bumi","cahaya Matahari yang dipantulkan oleh Bulan","awan gas di sekeliling Bumi","aliran zarah bercas yang dipancarkan dari korona Matahari"], 3],
  ["Bilangan tompok Matahari meningkat dan menurun mengikut satu kitaran kira-kira setiap", ["1 tahun","5 tahun","11 tahun","100 tahun"], 2]
 ]},
 { t: "9.2 Cuaca Angkasa Lepas", q: [
  ["Cuaca angkasa lepas merujuk kepada", ["keadaan hujan dan panas di Bumi","keadaan di angkasa lepas akibat aktiviti Matahari yang boleh menjejaskan Bumi dan teknologi","pergerakan planet mengelilingi Matahari","perubahan musim di Bumi"], 1],
  ["Lapisan yang melindungi Bumi daripada zarah bercas angin suria ialah", ["magnetosfera","troposfera","litosfera","hidrosfera"], 0],
  ["Antara berikut, yang manakah kesan ribut geomagnet terhadap teknologi?", ["Menambah kesuburan tanah","Menyebabkan hujan lebat","Gangguan sistem GPS, komunikasi satelit dan grid elektrik","Menurunkan suhu Bumi secara mendadak"], 2],
  ["Aurora biasanya dapat dilihat di kawasan", ["khatulistiwa","gurun","lautan tropika","berhampiran kutub utara dan kutub selatan"], 3],
  ["Semburan besar plasma dan medan magnet dari korona Matahari ke angkasa lepas dikenali sebagai", ["lentingan jisim korona","gerhana Matahari","tompok Matahari","hujan meteor"], 0]
 ]}
]},
{ b: "Bab 10: Penerokaan Angkasa Lepas", s: [
 { t: "10.1 Perkembangan dalam Astronomi", q: [
  ["Model geosentrik yang dikemukakan oleh Ptolemy menyatakan bahawa", ["Matahari berada di pusat alam semesta","Bumi berada di pusat dan dikelilingi oleh Matahari serta planet lain","Bulan berada di pusat sistem suria","planet tidak bergerak"], 1],
  ["Ahli astronomi yang mengemukakan model heliosentrik ialah", ["Nicolaus Copernicus","Ptolemy","Aristotle","Neil Armstrong"], 0],
  ["Galileo Galilei menyokong model heliosentrik selepas menggunakan teleskop untuk memerhati", ["tompok pada Bulan sahaja","cincin Zuhal","bulan-bulan yang mengorbit Musytari","komet Halley"], 2],
  ["Johannes Kepler mendapati bahawa orbit planet mengelilingi Matahari berbentuk", ["bulatan sempurna","segi empat","lurus","elips"], 3],
  ["Hukum kegravitian semesta yang menjelaskan mengapa planet mengorbit Matahari dikemukakan oleh", ["Isaac Newton","Galileo Galilei","Nicolaus Copernicus","Henri Becquerel"], 0]
 ]},
 { t: "10.2 Perkembangan Teknologi dan Aplikasinya dalam Penerokaan Angkasa Lepas", q: [
  ["Satelit buatan pertama yang dilancarkan ke angkasa lepas pada tahun 1957 ialah", ["Apollo 11","Sputnik 1","MEASAT-1","Hubble"], 1],
  ["Manusia pertama yang menjejakkan kaki di Bulan pada tahun 1969 ialah", ["Yuri Gagarin","Buzz Aldrin","Neil Armstrong","Michael Collins"], 2],
  ["Angkasawan pertama Malaysia yang ke Stesen Angkasa Antarabangsa pada tahun 2007 ialah", ["Dato' Dr. Sheikh Muszaphar Shukor","Kapten Faiz Khaleed","Tan Sri Dr. Mazlan Othman","Dato' Lee Chong Wei"], 0],
  ["MEASAT ialah satelit Malaysia yang digunakan terutamanya untuk", ["kajian planet Marikh","komunikasi dan penyiaran","pengintipan tentera","pengukuran radioaktif"], 1],
  ["Teknologi penderiaan jauh menggunakan satelit boleh membantu manusia untuk", ["memasak makanan dengan lebih cepat","menjana tenaga nuklear","menghasilkan ubat-ubatan","memantau kebakaran hutan, banjir dan perubahan guna tanah"], 3]
 ]}
]}
];
