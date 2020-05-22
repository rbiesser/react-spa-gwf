import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class TheGrayWhaleAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Description
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <p>The gray whale is a dark slate-gray in color and covered by characteristic gray-white patterns, scars left by parasites which drop off in its cold feeding grounds. Individual whales are typically identified using photographs of their dorsal surface and matching the scars and patches associated with parasites that have fallen off the whale or are still attached.</p>
            <p>Gray whales measure from 16 feet (4.9 m) in length for newborns to 43-50 feet (13-15 m) for adults (females tend to be slightly larger than adult males). Newborns are a darker gray to black in color. A mature gray whale can reach 40 tonnes (39 long tons; 44 short tons), with a typical range of 15 to 33 tonnes (15 to 32 long tons; 17 to 36 short tons). They have two blowholes on top of their head, which can create a distinctive V-shaped blow at the surface in calm wind conditions.</p>
            <p>A close-up of a gray whale’s double blow hole and some of its encrusted barnacles Notable features that distinguish the gray whale from other mysticetes include its baleen that is variously described as cream, off-white, or blond in color and is unusually short. Small depressions on the upper jaw each contain a lone stiff hair, but are only visible on close inspection. Its head’s ventral surface lacks the numerous prominent furrows of the related rorquals, instead bearing two to five shallow furrows on the throat’s underside. The gray whale also lacks a dorsal fin, instead bearing 6 to 12 dorsal crenulations (“knuckles”), which are raised bumps on the midline of its rear quarter, leading to the flukes. The tail itself is 10-12 feet (3.0–3.7 m) across and deeply notched at the center while its edges taper to a point.</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Populations
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Two Pacific Ocean populations are known to exist: one of not more than 130 individuals (according to the most recent population assessment in 2008) whose migratory route is presumed to be between the Sea of Okhotsk and southern Korea, and a larger one with a population between 20,000 and 22,000 individuals in the eastern Pacific traveling between the waters off Alaska and Baja California Sur.</p>
          <p>The western population is listed as critically endangered by the IUCN. No new reproductive females were recorded in 2010, resulting in a minimum of 26 reproductive females being observed since 1995. Even a very small number of additional annual female deaths will cause the subpopulation to decline. In 2007, S. Elizabeth Alter used a genetic approach to estimate prewhaling abundance based on samples from 42 California gray whales, and reported DNA variability at 10 genetic loci consistent with a population size of 76,000-118,000 individuals, three to five times larger than the average census size as measured through 2007.</p>
          <p>NOAA conducted a new populations study in 2010-2011; those data will be available by 2012. The ocean ecosystem has likely changed since the prewhaling era, making a return to prewhaling numbers infeasible; many marine ecologists argue that existing gray whale numbers in the eastern Pacific Ocean are approximately at the population’s carrying capacity. The gray whale became extinct in the North Atlantic in the 18th century Radiocarbon dating of subfossil or fossil European (Belgium, the Netherlands, Sweden, the United Kingdom) coastal remains confirms this, with whaling the possible cause. Remains dating from the Roman epoch were found in the Mediterranean during excavation of the antique harbor of Lattara near Montpellier in 1997, raising the question of whether Atlantic gray whales migrated up and down the coast of Europe to calve in the Mediterranean. Similarly, radiocarbon dating of American east coastal subfossil remains confirm gray whales existed at least through the 17th century. This population ranged at least from Southampton, New York, to Jupiter Island, Florida, the latest from 1675. In his 1835 history of Nantucket Island, Obed Macy wrote that in the early pre-1672 colony a whale of the kind called “scragg” entered the harbor and was pursued and killed by the settlers. A. B. Van Deinse points out that the “scrag whale”, described by P. Dudley in 1725 as one of the species hunted by the early New England whalers, was almost certainly the gray whale.</p>
          <p>In mid-1980, there were three gray whale sightings in the eastern Beaufort Sea, placing them 585 kilometers (364 mi) further east than their known range at the time. In May 2010, a gray whale was sighted off the Mediterranean shore of Israel. It has been speculated that this whale crossed from the Pacific to the Atlantic via the Northwest Passage, since alternative routes through the Panama Canal or Cape Horn are not contiguous to the whale’s established territory. There has been gradual melting and recession of Arctic sea ice with extreme loss in 2007 rendering the Northwest Passage “fully navigable”. The same whale was sighted again on May 30, 2010, off the coast of Barcelona, Spain. In January 2011, a gray whale that had been tagged in the western population was tracked as far east as the eastern population range off the coast of British Columbia.</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Reproduction
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>Breeding behavior is complex and often involves three or more animals. Both male and female whales reach puberty at approximately eight years of age. Females show highly synchronized reproduction, undergoing oestrus in late November to early December. During the breeding season, it is common for females to have several mates. This single ovulation event is believed to coincide with the species’ annual migration patterns, when births can occur in warmer waters.</p>
          <p>Most females show biennial reproduction, although annual births have been reported. Males also show seasonal changes, experiencing an increase in testes mass that correlates with the time females undergo oestrus. Currently there are no accounts of twin births, although an instance of twins in utero has been reported.The gestation period for gray whales is approximately 13.5 months. In the latter half of the pregnancy, the fetus experiences a rapid growth in length and mass. Similar to the narrow breeding season, most calves are born within a six-week time period in mid January The calf is born tail first, and measures about 4 m (13 ft) in length. Females lactate for approximately seven months following birth, at which point calves are weaned and maternal care begins to decrease. The shallow lagoon waters in which gray whales reproduce are believed to protect the newborn from sharks and orcas.</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Feeding
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <p>The whale feeds mainly on benthic crustaceans, which it eats by turning on its side (usually the right, resulting in loss of eyesight in the right eye for many older animals) and scooping up sediments from the sea floor. It is classified as a baleen whale and has baleen, or whalebone, which acts like a sieve, to capture small sea animals, including amphipods taken in along with sand, water and other material.</p>
            <p>Mostly, the animal feeds in the northern waters during the summer; and opportunistically feeds during its migration, depending primarily on its extensive fat reserves. Calf gray whales drink 50 to 80 US gallons (190 to 300 l) of their mothers’ 53% fat milk per day.</p>
            <p>The main feeding habitat of the western Pacific subpopulation is the shallow (5-15 m depth) shelf off northeastern Sakhalin Island, particularly off the southern portion of Piltun Lagoon, where the main prey species appear to be amphipods and isopods. In some years, the whales have also used an offshore feeding ground in 30–35 m depth southeast of Chayvo Bay, where benthic amphipods and cumaceans are the main prey species. Some gray whales have also been seen off western Kamchatka, but to date all whales photographed there are also known from the Piltun area. Gray whale breaching off the coast of Santa Barbara, California.</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Migration
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <p>Each October, as the northern ice pushes southward, small groups of eastern gray whales in the eastern Pacific start a two to three month, 8,000-11,000 kilometer (5,000-6,800 mi) trip south. Beginning in the Bering and Chukchi seas and ending in the warm-water lagoons of Mexico’s Baja peninsula and the southern Gulf of California, they travel along the west coast of Canada, the United States and Mexico. The western gray whale summers in the Okhotsk Sea, mainly off the northeastern coast of Sakhalin Island (Russian Federation).</p>
            <p>There are also occasional sightings off the eastern coast of Kamchatka (Russian Federation) and in other coastal waters of the northern Okhotsk Sea,. Its migration routes and wintering grounds are poorly known, the only recent information being from occasional records on both the eastern and western coasts of Japan and along the Chinese coast. The calving grounds are unknown but may be around Hainan Island, this being the southwestern end of the known range. Traveling night and day, the gray whale averages approximately 120 km (75 mi) per day at an average speed of 8 kilometers per hour (5 mph). This round trip of 16,000-22,000 km (9,900-14,000 mi) is believed to be the longest annual migration of any mammal. By mid-December to early January, the majority are usually found between Monterey and San Diego, often visible from shore. The whale watching industry provides ecotourists and marine mammal enthusiasts the opportunity to see groups of gray whales as they migrate. By late December to early January, eastern grays begin to arrive in the calving lagoons of Baja.</p>
            <p>The three most popular lagoons are Laguna Ojo de Liebre (formerly known in English as Scammon’s Lagoon after whaleman Charles Melville Scammon, who discovered the lagoons in the 1850s and hunted the grays), San Ignacio, and Magdalena. These first whales to arrive are usually pregnant mothers looking for the protection of the lagoons to bear their calves, along with single females seeking mates. By mid-February to mid-March, the bulk of the population has arrived in the lagoons, filling them with nursing, calving and mating gray whales. Throughout February and March, the first to leave the lagoons are males and females without new calves. Pregnant females and nursing mothers with their newborns are the last to depart, leaving only when their calves are ready for the journey, which is usually from late March to mid-April. Often, a few mothers linger with their young calves well into May. By late March or early April, the returning animals can be seen from Everett, Washington, to Puget Sound to Canada. A population of about 200 gray whales stay along the eastern Pacific coast from Canada to California throughout the summer, not making the farther trip to Alaskan waters. This summer resident group is known as the Pacific Coast feeding group.</p>
        </Accordion.Content>
      </Accordion>
    )
  }
}