import {React} from 'react'
import './ArticleInfo.css'
import {Link} from 'react-router-dom'


export default function ArticleInfo({currentArticle, handleClick}) {
    console.log(currentArticle)
    
  return (
      
    <div className='article'>
    <div className='card-container'>
        <div className='card'>
        <img src={currentArticle.img}  alt=""></img> 
             <button onClick={handleClick} className='btn'>Next</button>
        </div>
        
    </div>
    <div className='cont'>
   <h4>Solar panels are a great way to offset energy costs, reduce the environmental impact of your home and provide a host of other benefits, such as supporting local businesses and contributing to energy independence.</h4>

    <p>Looking to install panels on your home? I have solar panels, and wanted to share the top four benefits as I see them:</p>

<h2>1. Reduce or eliminate energy bills.</h2>
<p>This one is pretty amazing. We live in Washington, D.C., which has an average amount of sun, but it’s enough to power our house of three kids and two adults at net zero energy consumption. 
On warm spring days, we generate a lot more than we consume, and then we trade that with the utility. On hot summer days, when we run the air conditioning, or on cloudy days, we draw from the grid.
Even if you live somewhere cloudy, such locations typically receive more than two hours of sunlight per day, while sunny locations receive an average of 5.5 hours of sunlight per day.
Although sunny days will produce more solar energy, solar panels will continue to draw energy even when the weather is cloudy. Indirect, or diffused, sunlight will still help to power your home. Cloudy days usually produce around 10 to 20 percent of the power generated on sunny days.</p>

<h2>2. Earn tax credits and rebates.</h2>
<p>I didn’t realize how big of a benefit this one would be, but our solar panels are actually paying us. To start, you will get 30 percent of total system costs back from equipment and installation as a federal income tax credit when you file your taxes. This means you would save $7,500 on a solar system worth $25,000.
Combine this with state and local rebates and Solar Renewable Energy Credits (SRECs), and total costs can be cut in half. The SRECs are generated throughout the year, and you can sell them to utility companies, which generates a very impressive return on the initial investment.
Our D.C. Mayor, Muriel Bowser, signed the Renewable Portfolio Standard Expansion Act of 2016 in summer 2016. This Act, B21-0560, raises the renewable portfolio and solar requirements to 50 percent and 5 percent, respectively, by the year 2032. 
In addition, the bill establishes a program within the Department of Energy and the Environment to assist low-income homeowners with installing solar systems on their homes.
The idea behind the act is to incentivize the continued growth of D.C.’s solar industry, which has grown by 170 percent over the last year.
The investment has a payback period of only 3.5 years, while the solar panels have a warranty of 10 years and useful life of 25 years—which means you generate free electricity and extra credits for 20+ years. It's hard to beat. It's both socially responsible and economically profitable.
Many installers also offer a no-cost installation, where they front all of the money for the panels and installation and charge for electricity at a reduced rate. They are basically “leasing” your roof space and giving you a discount on the electricity in return. 
This is a good option for homeowners who do not want to make the initial investment or would prefer a no-money-down option. The installer collects all the proceeds from the SRECs in this case.
No matter where you live, you most likely have some amazing tax credits for solar. Take advantage of them while you still can.</p>

<h2>3. Start saving from day one.</h2>
<p>Annual energy costs can be in the thousands. In fact, the average annual energy expenditure per person is $3,052, including transportation and residential energy. Solar power can reduce or eliminate these costs as soon as they are installed. They also offer long-term savings, because it’s basically free to capture the power of the sun.
Solar panels significantly improve your resale value. Most home buyers understand what a home with solar panels means—especially because the system is already in place and they didn’t have to make the initial investment and installation. According to research, most homeowners see a $5,911 resale value increase per installed kilowatt. 
That means if you install a 3.1 kilowatt system, you could improve your home’s resale value by nearly $18,000.
Solar panels also extend the life of a roof, because they protect from the elements, such as rain, snow and debris. They make the house more energy-efficient in the summer because the hot sun is not beating down on the roof directly—it is instead being absorbed by the panels, keeping the house temperature lower.</p>

<h2>4. Help the environment and help us all.</h2>
<p>Solar power systems derive clean, pure energy from the sun. Installing solar panels on your home helps combat greenhouse gas emissions and reduces our collective dependence on fossil fuel. Traditional electricity is sourced from fossil fuels such as coal and natural gas. 
When fossil fuels are burned to produce electricity, they emit harmful gases that are the primary cause of air pollution and global climate change. Not only are fossil fuels bad for the environment, but they are also a finite resource. Because of this, the price is constantly fluctuating and can increase in a short period of time.
Renewable energy also improves public health. Coal and natural gas plants produce air and water pollution that is harmful to human health. But replacing fossil fuels with renewable energy sources, such as solar power, can reduce premature mortality as well as overall health care costs.
Although fossil fuel production requires significant water resources and causes water pollution, solar energy requires little to no water to operate. So, not only does solar power not pollute water resources, it also doesn’t put a strain on the world’s water supply.
Solar power also works during a drought or heat wave. Coal, natural gas and nuclear power use large amounts of water for cooling. During heat waves or severe droughts, as we’ve experienced in recent years, electricity generation is at risk. But solar power systems do not require water to generate electricity.
In addition, solar power creates jobs in clean energy. The U.S. has been leading the world in clean energy. Hopefully this trend will continue, in the face of government budget cuts to EPA and DOE, as innovative and forward-thinking companies continue to embrace the changing landscape of energy production and move to renewables.</p>

<Link to='/form' className='btn-art'>Click to see if you qualify</Link> 
   
</div>
</div>
  )
}
