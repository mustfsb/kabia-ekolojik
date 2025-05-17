"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import VideoTextMask from "@/components/video-text-mask"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Blur Elements - Distributed throughout the page */}
      <div className="fixed top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#7ED957]/5 blur-2xl -z-10"></div>
      <div className="fixed top-[30%] right-[8%] w-72 h-72 rounded-full bg-[#7ED957]/4 blur-2xl -z-10"></div>
      <div className="fixed top-[60%] left-[15%] w-80 h-80 rounded-full bg-[#7ED957]/5 blur-2xl -z-10"></div>
      <div className="fixed top-[80%] right-[20%] w-96 h-96 rounded-full bg-[#7ED957]/4 blur-2xl -z-10"></div>
      <div className="fixed top-[45%] left-[40%] w-64 h-64 rounded-full bg-[#7ED957]/3 blur-2xl -z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {/* Video Text Heading */}
          <div className="flex justify-center my-12 md:my-20">
            <VideoTextMask
              videoUrl="https://videos.pexels.com/video-files/3214449/3214449-uhd_2560_1440_25fps.mp4"
              text="HAKKIMIZDA"
            />
          </div>

          {/* About Content */}
          <div className="max-w-4xl mx-auto px-4">
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#7ED957]">
                Kabia Ekolojik Çiftliği: Doğanın Kalbinde Bir Yolculuk
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead text-xl text-muted-foreground">
                  Kabia Ekolojik Çiftliği, doğayla uyum içinde yaşamanın ve sürdürülebilir tarımın mümkün olduğunu
                  gösteren bir yaşam alanıdır.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7ED957]/90">
                2020'de Filizlenen Bir Hayal
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Her şey 2020 yılında başladı. Bu, sadece bir çiftlik kurma hikayesi değil; aynı zamanda doğaya dönme,
                  sağlıklı gıdalar üretme ve sürdürülebilir bir yaşam yaratma arzusunun hayat bulduğu bir yolculuktu.
                  Modern tarımın toprağı yıpratan yöntemlerine ve kimyasal bağımlılığa karşı bir duruş sergileyerek,
                  Kabia Ekolojik Çiftliği'ni kurmaya karar verdik.
                </p>
                <p>
                  Toprakla olan bağımız aslında çok daha derindi. Çocukluğumuzda aile büyüklerimizden gördüğümüz
                  geleneksel yöntemler, doğanın döngülerine duyduğumuz saygıyı ve onun dilini anlama çabasını bize miras
                  bıraktı. Ancak bu miras, sürdürülebilir bir geleceğin nasıl inşa edileceğine dair modern bir anlayışla
                  harmanlanmalıydı. Kabia Ekolojik, bu geleneği bilimle buluşturan bir köprü olmayı hedefliyordu.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7ED957]/90">
                Bir Düşten Fazlası: Biyolojik Tarım Felsefemiz
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Kabia Ekolojik, sadece organik tarım yapan bir çiftlik değil; aynı zamanda biyolojik tarım
                  uygulamalarıyla toprağın, bitkilerin ve ekosistemin bütüncül sağlığını gözeten bir yaşam alanıdır. Her
                  şey toprağın kendisini yeniden iyileştirebilmesine izin vermekle başladı. Bunun için kimyasal
                  gübreleri ve pestisitleri reddederek, doğanın kendisine sunduğu çözümleri benimsedik.
                </p>
                <p>
                  Kore Doğal Tarım Teknikleri, bu süreçte en önemli rehberimiz oldu. Mikroorganizmaların gücünü
                  kullanarak toprağı beslemek, doğal gübrelerle sağlıklı bitki yetiştirmek ve her adımda toprağın
                  biyolojik yaşamını desteklemek ana prensiplerimiz oldu. Bugün, çiftliğimizde ürettiğimiz badem ve
                  cevizler, sadece organik sertifikalı ürünler değil; aynı zamanda bu anlayışın birer meyvesidir.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7ED957]/90">Her Ağaç Bir Hikâye</h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Kabia Ekolojik'te, diktiğimiz her ağacın ayrı bir hikayesi var. Her biri, sadece meyve veren bir bitki
                  değil; toprakla kurduğumuz bağın canlı bir yansımasıdır. 2020 yılında ilk fidanlarımızı toprağa
                  dikerken, onların bir gün yüzlerce aileye sağlıklı gıda sunacağını biliyorduk. Ancak bu sadece
                  başlangıçtı.
                </p>
                <p>
                  Bugün çiftliğimizdeki her ağaç, doğaya verdiğimiz bir sözün kanıtıdır: Kimyasal kullanmadan, doğal
                  yollarla, sürdürülebilir bir biçimde tarım yapmak. Bu süreçte toprağı değil; aynı zamanda su
                  kaynaklarını, çevredeki biyolojik çeşitliliği ve doğal yaşamı koruyarak büyümeyi ilke edindik.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7ED957]/90">
                Tüketicilerle Doğrudan Bağlantı
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Kabia Ekolojik, sadece ürünlerin yetiştirildiği bir yer değil; aynı zamanda bu ürünlerin hikayesinin
                  paylaşıldığı bir platformdur. Bizimle ürünlerimizi alan herkes, bu hikayenin bir parçası oluyor. Her
                  kavanoz balda, her kilo bademde, her bir cevizin kabuğunda toprağa, suya ve emeğe duyduğumuz saygıyı
                  bulabilirsiniz.
                </p>
                <p>
                  Tüketicilerimize yalnızca ürün sunmuyoruz. Aynı zamanda onlara, gıdalarının nasıl üretildiğini, hangi
                  yöntemlerin kullanıldığını ve bu sürecin neden doğa dostu olduğunu anlatıyoruz. Şeffaflık bizim için
                  bir tercih değil, bir zorunluluktur.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7ED957]/90">Zorluklar ve Kazanımlar</h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Organik tarıma başlamak kolay olmadı. Geleneksel tarımda kullanılan kimyasalların hızlı sonuçlarına
                  alışan bir dünyada, biyolojik yöntemlerle çalışmak sabır ve kararlılık gerektiriyordu. Toprak, ilk
                  yıllarda bu değişime adapte olurken daha az verim verdi. Ancak bu sürecin doğanın kendi dengesini
                  bulması için gerekli olduğunu biliyorduk.
                </p>
                <p>
                  Bugün, organik tarım sertifikasına sahip ürünlerimizle sadece toprağı değil; aynı zamanda sağlıklı
                  nesiller yetiştirmek isteyen aileleri de besliyoruz. Bu yolda kazandığımız en büyük ödül, sadece
                  yetiştirdiğimiz ürünlerin kalitesi değil; aynı zamanda doğaya duyduğumuz saygının insanlar tarafından
                  takdir edilmesidir.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7ED957]/90">Vizyonumuz ve Misyonumuz</h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Vizyonumuz, organik tarımın sadece bir üretim yöntemi değil, bir yaşam biçimi olduğunu göstermek ve bu
                  bilinci yaymak. Toprağı koruyarak, sağlıklı ürünler yetiştirerek ve ekosisteme katkı sağlayarak,
                  gelecek nesiller için sürdürülebilir bir dünya yaratmaya inanıyoruz.
                </p>
                <p>
                  Misyonumuz, Kabia Ekolojik'i sadece bir çiftlik olarak değil, doğayla uyumlu yaşamın bir örneği olarak
                  geliştirmek. İnsanların hem bedenlerini hem de ruhlarını besleyecek sağlıklı ve güvenilir gıdalar
                  sunarken, çevreyi koruma sorumluluğunu da yerine getiriyoruz.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7ED957]/90">
                2020'den Bugüne: Birlikte Büyüyen Aile
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Bugün Kabia Ekolojik, sadece bizim emeğimizle değil; bizimle aynı değerlere inanan bir topluluğun
                  desteğiyle büyüyor. Ürünlerimizi alan, blogumuzu okuyan, tariflerimizi deneyen ve bizimle bu hikayeyi
                  paylaşan herkes, Kabia Ekolojik ailesinin bir parçasıdır.
                </p>
                <p>
                  Doğayla barış içinde yaşamanın ve sürdürülebilir bir gelecek yaratmanın mümkün olduğunu göstermek için
                  çıktığımız bu yolda, her bir adımı doğanın rehberliğinde atmaya devam ediyoruz. Bu yolculukta bize
                  katılan herkese teşekkür ederiz. Çünkü biliyoruz ki bu sadece bir başlangıç.
                </p>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button className="bg-[#7ED957] hover:bg-[#6BC745] text-white rounded-full px-8 py-3 h-auto text-md">
                Ürünlerimizi Keşfedin
              </Button>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
