import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CallToActionComponent } from "../../../shared/components/call-to-action/call-to-action.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, CallToActionComponent, TranslateModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {
  // faqs = [
  //   {
  //     question: 'HOME.FAQ.Q1',
  //     answer: 'HOME.FAQ.A1',
  //     open: false,
  //   },
  //   {
  //     question: 'HOME.FAQ.Q2',
  //     answer: 'HOME.FAQ.A2',
  //     open: false,
  //   },
  //   {
  //     question: 'HOME.FAQ.Q3',
  //     answer: 'HOME.FAQ.A3',
  //     open: false,
  //   },
  //   {
  //     question: 'HOME.FAQ.Q4',
  //     answer: 'HOME.FAQ.A4',
  //     open: false,
  //   },
  // ];

  faqs = [
    {
      question: 'Proč bych měl koupit tiny house a ne klasickou chatu?',
      answer: 'Tiny house DOMIVKA je hotový dům, připravený k okamžitému použití, bez nutnosti stavebního povolení a s menšími náklady na provoz i údržbu.',
      open: false,
    },
    {
      question: 'Nebude v zimě zima a v létě horko?',
      answer: 'Domy jsou plně izolované (PIR panely 80–120 mm), mají klimatizaci a topení. Ověřené fungování v rozmezí od -30 °C do +50 °C.',
      open: false,
    },
    {
      question: 'Jak dlouho vydrží?',
      answer: 'Životnost konstrukce je více než 50 let. Navíc poskytujeme 10letou záruku a kontrolu kvality při výrobě.',
      open: false,
    },
    {
      question: 'A co vlhkost nebo plíseň?',
      answer: 'Díky kvalitní izolaci, rekuperaci a použitým materiálům (nehořlavé, certifikované) nehrozí plísně ani kondenzace.',
      open: false,
    },
    {
      question: 'Potřebuju stavební povolení?',
      answer: 'Ne, protože se jedná o mobilní stavbu. Stačí souhlas majitele pozemku.',
      open: false,
    },
    {
      question: 'Jak rychle ho dodáte?',
      answer: 'Standardní doba výroby je do 30 dnů od podpisu smlouvy.',
      open: false,
    },
    {
      question: 'Můžu si dům přizpůsobit podle sebe?',
      answer: 'Ano, nabízíme rozsáhlé možnosti personalizace – materiály, spotřebiče, energetickou autonomii, podvozek na kolech atd.',
      open: false,
    },
    {
      question: 'Co když budu chtít dům přemístit?',
      answer: 'Každý dům je konstruován jako vysoce mobilní a snese opakované přesuny.',
      open: false,
    },
    {
      question: 'Je to vhodné i na pronájem (Airbnb, hotely)?',
      answer: 'Ano, mnoho našich zákazníků je využívá pro komerční projekty. Domy jsou komfortní a lákají specifickou klientelu.',
      open: false,
    },
    {
      question: 'Kolik to bude stát měsíčně na provoz?',
      answer: 'Díky energetické účinnosti a izolaci je spotřeba výrazně nižší než u klasické chaty. Autonomní řešení (solární, voda, kanalizace) může snížit náklady téměř na nulu.',
      open: false,
    },
    {
      question: 'Co když se mi něco pokazí?',
      answer: 'Máte 10letou záruku. Poskytujeme také servis a podporu po celou dobu používání.',
      open: false,
    },
    {
      question: 'Jak probíhá doprava?',
      answer: 'Dům dopravíme přímo na váš pozemek a umístíme pomocí podstavce nebo nastavitelných nožiček. Není nutný základ.',
      open: false,
    },
    {
      question: 'Můžu v tom bydlet celý rok?',
      answer: 'Ano. Jsou určeny pro celoroční použití a odolávají všem klimatickým podmínkám.',
      open: false,
    },
    {
      question: 'Co když nemám připojení k elektřině nebo vodě?',
      answer: 'Nabízíme řešení úplné autonomie – solární panely, bateriové úložiště, zásobníky vody, bezvodé WC.',
      open: false,
    },
    {
      question: 'Jak velký je prostor uvnitř?',
      answer: 'Model 1: 12,5 m² (pro 2 osoby), Model 2: 15 m² (pro 2–4 osoby). Každý dům je plně funkční s kuchyní, koupelnou a lůžky.',
      open: false,
    },
    {
      question: 'Není to moc malé?',
      answer: 'Díky chytrému designu je prostor maximálně využitý – pohodlná postel, sprcha, kuchyň, pracovní místo, úložné prostory. Vhodné na víkend, retreat nebo pronájem.',
      open: false,
    },
    {
      question: 'Kolik to stojí?',
      answer: 'Cena závisí na výbavě a personalizaci. Rádi vám připravíme kalkulaci na míru.',
      open: false,
    },
    {
      question: 'Jak je to bezpečné?',
      answer: 'Konstrukce je z certifikovaných, nehořlavých a odolných materiálů. Okna a dveře mají tepelnou i bezpečnostní izolaci.',
      open: false,
    },
    {
      question: 'Můžu přijít dům vidět?',
      answer: 'Ano, po předchozí dohodě můžete navštívit naši dílnu v Kyjevě a vidět výrobu na vlastní oči.',
      open: false,
    },
    {
      question: 'A co když pozemek není rovný?',
      answer: 'Domy se instalují na stavitelný rám nebo nožičky, takže není potřeba rovný terén ani betonový základ.',
      open: false,
    },
    {
      question: 'Jaká je návratnost investice?',
      answer: 'Při pronájmu návratnost začíná už od 2 let, podle lokality a vytíženosti.',
      open: false,
    },
    {
      question: 'Je to vhodné i pro rodinu s dětmi?',
      answer: 'Ano, Model 2 je koncipován pro 2–4 osoby, s více lůžky a velkým úložným prostorem.',
      open: false,
    },
    {
      question: 'Co když chci dům používat jen sezónně?',
      answer: 'To není problém – je plně funkční jak pro krátkodobý, tak dlouhodobý pobyt.',
      open: false,
    },
    {
      question: 'Jak je to s údržbou?',
      answer: 'Díky kvalitním materiálům vyžaduje minimum údržby. Stačí běžná péče jako u klasického domu.',
      open: false,
    },
    {
      question: 'Můžu mít více DOMIVEK vedle sebe?',
      answer: 'Ano, někteří zákazníci staví celé mini-rezorty. Je to ideální řešení pro hoteliérství nebo glamping.',
      open: false,
    },
    {
      question: 'Co když se změním názor a budu chtít něco jiného?',
      answer: 'Díky modulárnímu a mobilnímu systému dům můžete prodat, přesunout nebo přestavět.',
      open: false,
    },
    {
      question: 'Kolik času zabere instalace?',
      answer: 'Obvykle 1 den – přivezeme hotový dům, postavíme a připojíme.',
      open: false,
    },
    {
      question: 'Jak je to ekologické?',
      answer: 'Domy zanechávají minimální stopu na životním prostředí, nepoužívají těžkou stavební techniku a materiály jsou šetrné k přírodě.',
      open: false,
    },
    {
      question: 'Můžu si vybrat styl interiéru?',
      answer: 'Ano, nabízíme individuální design, různé materiály a povrchové úpravy.',
      open: false,
    },
    {
      question: 'Proč DOMIVKA a ne jiný výrobce?',
      answer: 'Nabízíme kompletní cyklus: od návrhu a výroby po dodání a instalaci. Máme rychlé termíny, 10letou záruku, možnost plné autonomie a zkušenosti zákazníků z celého světa.',
      open: false,
    },
  ];


  visibleCount = 5;

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  showMore() {
    this.visibleCount = Math.min(this.visibleCount + 5, this.faqs.length);
  }

  showLess() {
    this.visibleCount = 5;
  }
}

