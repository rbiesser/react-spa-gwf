import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AboutAccordion extends Component {
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
          The Master Plan
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <p>Our mission is to create a hands-on opportunity for students to engage with their marine environment. By providing a unique and memorable experience on the water, we inspire students toward ocean stewardship and future involvement in activities that promote environmental awareness and conservation.</p>
            <p>Students will share their experience and new found knowledge with their communities, creating a “ripple effect” of enthusiasm for ocean conservation. Moreover, by engaging young people in hands-on data collection and the application of basic scientific principles, we provide a spring-board from which they can pursue future scientific interests.</p>
            <p>The Gulf of Catalina Gray Whale Preservation and Education Foundation’s ultimate goal is to create an environmental education program, centered around the Gray Whale and its ecosystem, that is funded solely by the private sector. We feel that by using Gray Whales as a “focal animal”, teachers and students have the opportunity to integrate subjects like science, technology, engineering, and mathematics. Engaging students in these areas of study is crucial to developing a work force and citizenry capable of thriving in our rapidly changing technological era.  We want to ensure that future generations have the opportunity to go out on whale watching vessels and learn about the Gray Whale migration first-hand on the ocean.</p>
            <p>With so much of public school funding being cut back year after year, we feel it is critical that we offer students an opportunity to get out of the classroom and experience life beyond their typical learning environment.  A real live moment with nature establishes a connection that many never have the chance to establish. There are too many children that have never had the chance to even see the ocean. Our intent is to provide as many children as possible with the opportunity to see this wildlife in real life situations and overcome what many refer to these days as nature deficit disorder.</p>
            <p>As schools are required more and more to meet federal content standards, less instructional time is devoted to local and regional history and education. Our foundation is working with individual schools, teachers and school districts to come up with a West Coast regional curriculum. We feel our curriculum provides a way for teachers to meet federal science standards while still educating students on on the culture, history, and biology associated with the California Gray Whale.</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          In-depth Research
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Our project is unique in two important ways. First, we work with school districts to provide a unique wildlife experience to 1600 students per year who would not otherwise experience their natural marine world.</p>
          <p>We provide each student the opportunity to conduct hands-on marine science and work alongside a real life scientist in the field. We also educate these youth about whales, the relationship between ocean health and human health and behavior, and ways to protect and conserve natural marine resources including National Marine Sanctuaries and marine protected areas (MPAs).</p>
          <p>Second, we work with scientists, whale watching businesses, and NOAA personnel to provide crucial data on Gray Whale occurrence, distribution, and behavior in and around MPAs throughout the Southern California Bight (SCB). Our research provides information about the ecology of Gray Whales in the context of newly established MPAs — information that can be used in the decision-making processes associated with MPA design and use.</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          General Information
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>The California Gray Whale is a baleen whale that endures the longest annual migration (~20,000 miles!) of any mammal on Earth. Gray Whales live to be 50-70 years old and can reach a length of about 50 ft. Every October, around 20,000 Gray Whales leave the Bering and Chukchi Seas of Alaska and head down the Pacific Coast to birth calves and find mates in the warm lagoons of Baja, Mexico.</p>
          <p>They use the coastline to navigate their journey and provide protection from predators. Once they reach the lagoons, Gray Whales spend the next few months birthing and nursing calves and mating. In February and March, the first whales begin the northbound migration back to Alaska. Mothers with calves are usually the last to leave, and don’t do so until the new calves are ready for the long journey home, usually in late March to mid-April.</p>
          <p>Gray whales are wonderful ambassadors for ocean conservation because they are mammals, and people, especially children, tend to feel an inherent connection and admiration for them. As such, we feel they can help us address the individual and collective factors that inhibit people from conserving shared natural resources. First, by providing youth with a real live moment with nature, we hope to combat their “out of sight, out of mind” mentality and establish a connection that many would never experience otherwise.</p>
          <p>Through this opportunity, young people connect with nature, understand their relationship to it, and feel a pride of ownership for its well-being. Second, we teach children how humans impact the ocean and show them the cumulative results of individual behaviors. Using a hands-on activity at their schools, we demonstrate their place in the watershed. By doing so, we make it explicit how every instance of runoff pollution, marine mammal harassment, and marine debris negatively affects the ecosystem now and in the near to immediate future.</p>
        </Accordion.Content>
      </Accordion>
    )
  }
}