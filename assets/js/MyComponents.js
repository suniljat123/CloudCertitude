class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<footer id="footer" class="footer">

    <div class="container">
      <div style="text-align: center;">

        <img src="assets/img/cloudlogo.png" height="100" width="170" />
        <p>Maximize Salesforce User Adoption and Transform Customer Experiences.</p>

      </div>
      <br>

      <div class="row gy-3 addressDiv">
        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-geo-alt icon"></i>
          <div>
            <h4>Address</h4>
            <p>
              DG-B-1704 & 05, 17th Floor, Emaar Digital Green, Golf course
              Extn. Road, Sector-61, Gurugram, Haryana 122011
            </p>
          </div>

        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-telephone icon"></i>
          <div>
            <h4>Reservations</h4>
            <p>
              <strong>Phone:</strong> <a href="tel:+919999105081" style="color: #ffffff">+91 9999105081</a> <br>
              <strong>Email:</strong> <a href="mailto: info@cloudcertitude.com"
                style="color: #ffffff; ">info@cloudcertitude.com</a><br>
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-clock icon"></i>
          <div>
            <h4>Opening Hours</h4>
            <p> 
              <strong>Mon - Fri: </strong>10 AM - 7 PM IST<br>
               <strong>Sat - Sun:</strong> Closed
            </p>
          </div>
        </div> 
        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Follow Us</h4>

          <div class="social-links d-flex">
            <a href="https://twitter.com/cloudcertitude" target="_blank" class="twitter"><i
                class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/cloudcertitude" target="_blank" class="facebook"><i
                class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/cloud_certitude/" target="_blank" class="instagram"><i
                class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/cloudcertitude/" class="linkedin" target="_blank"><i
                class="bi bi-linkedin"></i></a>
                <a href="https://join.skype.com/invite/a21730WhsqCt" target="_blank" class="google-plus"><i class="bx bxl-skype"></i></a>
          </div>
        </div>

      </div>
    </div>
    <div class="appExchange" style="display: flex;justify-content:center;flex-wrap:wrap;">
      <img src="assets/img/f1.png" height="100" width="100" class="m-3" />
      <img src="assets/img/f2.png" height="100" width="100" class="m-3" />
      <img src="assets/img/f3.png" height="100" width="100" class="m-3" />
      <img src="assets/img/f4.jpg" height="100" width="100" class="m-3" />
    </div>
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Cloud Certitude </span></strong>. All
        Rights Reserved
      </div>

    </div>

  </footer>`;
  }
}
class Testimonials extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `  <section id="testimonials" class="testimonials">
   
      <div class="container" data-aos="zoom-in">

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <!-- <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""> -->
                <h3>Jared Gray</h3>
                <h4>Vice President, Director of Operations</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Rakesh and his team are extremely knowledgeable about Salesforce. They are very responsive to
                  requests,
                  have great communication, and do excellent work. They have helped me build a very unique, customized
                  Salesforce environment that has been very helpful for my business. I am very happy I found Rakesh and
                  his
                  team to handle my Salesforce needs. I highly recommend them.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <!-- <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""> -->
                <h3>Omer Saeed</h3>
                <h4>Callidus Cloud</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Rakesh and the CloudCertitude team have been a valuable partner in our Salesforce efforts for many
                  years.
                  They took over an enhanced a complicated AppExchange Package, and helped us pass multiple security
                  reviews
                  over the years. They have also developed new packages that helped solve specific needs for our
                  customers,
                  coming up with creative solutions. They have always communicated well with our team and delivered
                  projects
                  on time and budget.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <!-- <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""> -->
                <h3>Mit freundlichen Grüßen</h3>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  We work with Rakesh and his team for over 3 years now and he and his team members always meet or
                  exceed
                  expectations. We are very happy with the work ethic and the attitude towards deadlines and emergencies
                  –
                  if need be he himself will join working teams or get appropriate and technical specialized
                  consultants.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->


          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>`;
  }
}
class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
        <a href="index.html"><img src="assets/img/cloudlogo.png" height="100" width="100" /></a>
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <!-- <li><a class="nav-link scrollto active" href="#hero">Home</a></li>   -->

          <li class="dropdown dropDownServiceNormal">
            <a href="#Features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="serviceMenu" style="display: flex; align-items: normal !important">
              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Implementation
                </ol>
                <li class="ServiceLi">
                  <a href="SalesCloud.html">Sales Cloud</a>
                </li>
                <li class="ServiceLi"><a href="MarketingCloud.html">Marketing Cloud</a></li>
                <li class="ServiceLi"><a href="AnalyticsCloud.html">Analytics Cloud</a></li>
                <li class="ServiceLi"><a href="ExperienceCloud.html">Experience Cloud</a></li>
                <li class="ServiceLi">
                  <a href="FinancialCloud.html">Financial services Cloud</a>
                </li>
                <li class="ServiceLi"><a href="NonProfitCloud.html">Non-Profit Cloud</a></li>
                <li class="ServiceLi"><a href="SalesforcePardot.html">Salesforce Pardot</a></li> 
                      <li class="ServiceLi"><a href="EducationCloud.html">Education Cloud</a></li>
                <li class="ServiceLi"><a href="HealthCloud.html">Health Cloud</a></li>
               
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Migration
                </ol>
                <li class="ServiceLi">
                  <a href="ClassicToLightningMigration.html">Classic to Lightning </a>
                </li>
                <li class="ServiceLi">
                  <a href="ThirdPartyToSalesforceMigration.html">Third-Party to Salesforce </a>
                </li>
              </div>

              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Development
                </ol>
                <li class="ServiceLi">
                  <a href="CustomCloud.html">Custom Cloud App</a>
                </li>
                <li class="ServiceLi">
                  <a href="MobileFirst.html">Mobile-First Solution</a>
                </li>
                <li class="ServiceLi">
                  <a href="AppExchange.html">AppExchange Product</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceCustomization.html">Salesforce Customization</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceConfiguration.html">Salesforce Configuration</a>
                </li>
                
                <ol style="color: black; font-weight: bold; padding-left: 13px ;cursor:pointer">
                  Support
                </ol>
                <li class="ServiceLi"><a href="ManagedServices.html">Managed Services</a></li>
                <li class="ServiceLi">
                  <a href="RemoteAdministrator.html">Remote Administrator</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceProductionSupport.html">Salesforce Production </a>
                </li>
                <li class="ServiceLi">
                  <a href="UserAdminAndManagementTraning.html">User Admin and Management</a>
                </li>
              </div>




              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Integration & Consulting
                </ol>
                <li class="ServiceLi"><a href="ERPIntegration.html">ERP </a></li>
                <li class="ServiceLi">
                  <a href="AccountingSoftwareIntegration.html">Accounting Software </a>
                </li>
                <li class="ServiceLi">
                  <a href="MarketingAutomationIntegration.html">Marketing Automation </a>
                </li>
                <li class="ServiceLi">
                  <a href="SocialMediaIntegration.html">Social Media </a>
                </li>
                <li class="ServiceLi">
                  <a href="ECommerceIntegration.html">E-Commerce </a>
                </li>
                <li class="ServiceLi"><a href="ChatbotIntegration.html">Chatbot </a></li>
                <li class="ServiceLi">
                  <a href="PaymentGatewayIntegration.html">Payment Gateway </a>
                </li>
                <li class="ServiceLi">
                  <a href="CollaborationToolsIntegration.html">Collaboration Tools </a>
                </li>
                <li class="ServiceLi">
                  <a href="CalendeEmailIntegration.html">Calender & Email </a>
                </li>
                <li class="ServiceLi"><a href="CTI.html">CTI</a></li>
                <li class="ServiceLi"><a href="ITSMIntgration.html">ITSM </a></li>
              </div>
            </ul>
          </li>

          <!-- for Mobile responsive navbar  -->
          <li class="dropdown dropDownServiceMobile">
            <a href="#Features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown">
                <a href="#"><span>Implementation</span>
                  <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="SalesCloud.html">Sales Cloud</a></li>
                  <li><a href="MarketingCloud.html">Marketing Cloud</a></li>
                  <li><a href="ServiceCloud.html">Service Cloud</a></li>
                  <li><a href="AnalyticsCloud.html">Analytics Cloud</a></li>
                  <li><a href="ExperienceCloud.html">Experience Cloud</a></li>
                  <li><a href="FinancialCloud.html">Financial services Cloud</a></li>
                  <li><a href="NonProfitCloud.html">Non-Profit Cloud</a></li>
                  <li><a href="SalesforcePardot.html">Salesforce Pardot</a></li>
                  <li><a href="EducationCloud.html">Education Cloud</a></li>
                  <li><a href="HealthCloud.html">Health Cloud</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Development</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="CustomCloud.html">Custom Cloud App </a></li>
                  <li><a href="MobileFirst.html">Mobile-First Solution </a></li>
                  <li><a href="AppExchange.html">AppExchange Product </a></li>
                  <li><a href="SalesforceCustomization.html">Salesforce Customization</a></li>
                  <li><a href="SalesforceConfiguration.html">Salesforce Configuration</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Migration</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ClassicToLightningMigration.html">Classic to Lightning Migration</a></li>
                  <li><a href="ThirdPartyToSalesforceMigration.html">Third-Party to Salesforce Migration</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Support</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ManagedServices.html">Managed Services</a></li>
                  <li><a href="RemoteAdministrator.html">Remote Administrator</a></li>
                  <li><a href="SalesforceProductionSupport.html">Salesforce Production Support</a></li>
                  <li><a href="UserAdminAndManagementTraning.html">User Admin and Management Training</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Integration and Consulting</span>
                  <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ERPIntegration.html">ERP </a></li>
                  <li><a href="AccountingSoftwareIntegration.html">Accounting Software </a></li>
                  <li><a href="MarketingAutomationIntegration.html">Marketing Automation </a></li>
                  <li><a href="SocialMediaIntegration.html">Social Media </a></li>
                  <li><a href="ECommerceIntegration.html">E-Commerce </a></li>
                  <li><a href="ChatbotIntegration.html">Chatbot </a></li>
                  <li><a href="PaymentGatewayIntegration.html">Payment Gateway </a></li>
                  <li><a href="CollaborationToolsIntegration.html">Collaboration Tools </a></li>
                  <li><a href="CalendeEmailIntegration.html">Calender & Email </a></li>
                  <li><a href="CTI.html">CTI</a></li>
                  <li><a href="ITSMIntgration.html">ITSM </a></li>
                </ul>
              </li>
            </ul>
          </li>
          <!-- for Mobile responsive navbar  -->

          <!-- <li><a class="nav-link scrollto" href="#team">Our Product</a></li>   -->
          <li class="dropdown">
            <a href="#Industries"><span>Industries</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="NonProfit.html">Non-Profit</a></li>
              <li><a href="Education.html">Education</a></li>
              <li><a href="Publicsector.html">Public Sector</a></li>
              <li><a href="HealthCare.html">Healthcare</a></li>
              <li><a href="LifeSciences.html">Life Sciences</a></li>
              <li><a href="CommunicationMedia.html">Communication & media</a></li>
              <li><a href="Manufacturing.html">Manufacturing</a></li>
              <li><a href="HighTech.html">High Tech</a></li>
              <li><a href="Retails.html">Consumer Goods & Retail</a></li>
              <li><a href="FinancialServices.html">Financial Services</a></li>
              <li><a href="ProfessionalServices.html">Professional Services</a></li>
            </ul>
          </li>
          <li>
            <a class="nav-link scrollto" href="product.html">Our Product</a>
          </li>
          <li class="dropdown">
            <a href="#About"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#about" onclick="navbarClosed()">About us</a></li>
              <li><a href="#testimonials" onclick="navbarClosed()">Testimonials</a></li>

              <li><a href="#team" onclick="navbarClosed()">Leadership</a></li>
              <li><a href="Career.html">Careers</a></li>
              <li><a href="CaseStudy.html">Case Study</a></li>
              <li><a href="Contact.html">Contact us</a></li>
            </ul>
          </li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
          <li>
            <a class="getstarted scrollto RequestDemo" href="#contact" >Request Demo</a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle " id="crossBttn"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  `;
  }
}
class AllNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<header id="header" class="fixed-top"  >
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
        <a href="index.html"><img src="assets/img/cloudlogo.png" height="100" width="100" /></a>
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <!-- <li><a class="nav-link scrollto active" href="index.html">Home</a></li> -->

          <li class="dropdown dropDownServiceNormal">
            <a href="#Features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="serviceMenu" style="display: flex; align-items: normal !important">
              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Implementation
                </ol>
                <li class="ServiceLi">
                  <a href="SalesCloud.html">Sales Cloud</a>
                </li>
                <li class="ServiceLi">
                  <a href="ServiceCloud.html">Service Cloud</a>
                </li>
                <li class="ServiceLi"><a href="MarketingCloud.html">Marketing Cloud</a></li>
                <li class="ServiceLi"><a href="AnalyticsCloud.html">Analytics Cloud</a></li>
                <li class="ServiceLi"><a href="ExperienceCloud.html">Experience Cloud</a></li>
                <li class="ServiceLi">
                  <a href="FinancialCloud.html">Financial services Cloud</a>
                </li>
                <li class="ServiceLi"><a href="NonProfitCloud.html">Non-Profit Cloud</a></li>
                <li class="ServiceLi"><a href="SalesforcePardot.html">Salesforce Pardot</a></li>
                <li class="ServiceLi"><a href="EducationCloud.html">Education Cloud</a></li>
                <li class="ServiceLi"><a href="HealthCloud.html">Health Cloud</a></li>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Migration
                </ol>
                <li class="ServiceLi">
                  <a href="ClassicToLightningMigration.html">Classic to Lightning </a>
                </li>
                <li class="ServiceLi">
                  <a href="ThirdPartyToSalesforceMigration.html">Third-Party to Salesforce </a>
                </li>
              </div>

              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Development
                </ol>
                <li class="ServiceLi">
                  <a href="CustomCloud.html">Custom Cloud App</a>
                </li>
                <li class="ServiceLi">
                  <a href="MobileFirst.html">Mobile-First Solution</a>
                </li>
                <li class="ServiceLi">
                  <a href="AppExchange.html">AppExchange Product</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceCustomization.html">Salesforce Customization</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceConfiguration.html">Salesforce Configuration</a>
                </li>
                
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Support
                </ol>
                <li class="ServiceLi"><a href="ManagedServices.html">Managed Services</a></li>
                <li class="ServiceLi">
                  <a href="RemoteAdministrator.html">Remote Administrator</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceProductionSupport.html">Salesforce Production </a>
                </li>
                <li class="ServiceLi">
                  <a href="UserAdminAndManagementTraning.html">User Admin and Management</a>
                </li>
              </div>




              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Integration & Consulting
                </ol>
                <li class="ServiceLi"><a href="ERPIntegration.html">ERP </a></li>
                <li class="ServiceLi">
                  <a href="AccountingSoftwareIntegration.html">Accounting Software </a>
                </li>
                <li class="ServiceLi">
                  <a href="MarketingAutomationIntegration.html">Marketing Automation </a>
                </li>
                <li class="ServiceLi">
                  <a href="SocialMediaIntegration.html">Social Media </a>
                </li>
                <li class="ServiceLi">
                  <a href="ECommerceIntegration.html">E-Commerce </a>
                </li>
                <li class="ServiceLi"><a href="ChatbotIntegration.html">Chatbot </a></li>
                <li class="ServiceLi">
                  <a href="PaymentGatewayIntegration.html">Payment Gateway </a>
                </li>
                <li class="ServiceLi">
                  <a href="CollaborationToolsIntegration.html">Collaboration Tools </a>
                </li>
                <li class="ServiceLi">
                  <a href="CalendeEmailIntegration.html">Calender & Email </a>
                </li>
                <li class="ServiceLi"><a href="CTI.html">CTI</a></li>
                <li class="ServiceLi"><a href="ITSMIntgration.html">ITSM </a></li>
              </div>
            </ul>
          </li>

          <!-- for Mobile responsive navbar  -->
          <li class="dropdown dropDownServiceMobile">
            <a href="#Features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown">
                <a href="#"><span>Implementation</span>
                  <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="SalesCloud.html">Sales Cloud</a></li>
                  <li><a href="ServiceCloud.html">Service Cloud</a></li>
                  <li><a href="MarketingCloud.html">Marketing Cloud</a></li>
                  <li><a href="ServiceCloud.html">Service Cloud</a></li>
                  <li><a href="AnalyticsCloud.html">Analytics Cloud</a></li>
                  <li><a href="ExperienceCloud.html">Experience Cloud</a></li>
                  <li><a href="FinancialCloud.html">Financial services Cloud</a></li>
                  <li><a href="NonProfitCloud.html">Non-Profit Cloud</a></li>
                  <li><a href="SalesforcePardot.html">Salesforce Pardot</a></li>
                  <li><a href="EducationCloud.html">Education Cloud</a></li>
                  <li><a href="HealthCloud.html">Health Cloud</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Development</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="CustomCloud.html">Custom Cloud App </a></li>
                  <li><a href="MobileFirst.html">Mobile-First Solution </a></li>
                  <li><a href="AppExchange.html">AppExchange Product </a></li>
                  <li><a href="SalesforceCustomization.html">Salesforce Customization</a></li>
                  <li><a href="SalesforceConfiguration.html">Salesforce Configuration</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Migration</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ClassicToLightningMigration.html">Classic to Lightning Migration</a>
                  </li>
                  <li><a href="ThirdPartyToSalesforceMigration.html">Third-Party to Salesforce
                      Migration</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Support</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ManagedServices.html">Managed Services</a></li>
                  <li><a href="RemoteAdministrator.html">Remote Administrator</a></li>
                  <li><a href="SalesforceProductionSupport.html">Salesforce Production Support</a>
                  </li>
                  <li><a href="UserAdminAndManagementTraning.html">User Admin and Management
                      Training</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Integration and Consulting</span>
                  <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ERPIntegration.html">ERP </a></li>
                  <li><a href="AccountingSoftwareIntegration.html">Accounting Software </a>
                  </li>
                  <li><a href="MarketingAutomationIntegration.html">Marketing Automation
                    </a>
                  </li>
                  <li><a href="SocialMediaIntegration.html">Social Media </a></li>
                  <li><a href="ECommerceIntegration.html">E-Commerce </a></li>
                  <li><a href="ChatbotIntegration.html">Chatbot </a></li>
                  <li><a href="PaymentGatewayIntegration.html">Payment Gateway </a></li>
                  <li><a href="CollaborationToolsIntegration.html">Collaboration Tools
                    </a>
                  </li>
                  <li><a href="CalendeEmailIntegration.html">Calender & Email </a></li>
                  <li><a href="CTI.html">CTI</a></li>
                  <li><a href="ITSMIntgration.html">ITSM </a></li>
                </ul>
              </li>
            </ul>
          </li>
          <!-- for Mobile responsive navbar  -->

          <!-- <li><a class="nav-link scrollto" href="#team">Our Product</a></li>   -->
          <li class="dropdown">
            <a href="#Industries"><span>Industries</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="NonProfit.html">Non-Profit</a></li>
              <li><a href="Education.html">Education</a></li>
              <li><a href="Publicsector.html">Public Sector</a></li>
              <li><a href="HealthCare.html">Healthcare</a></li>
              <li><a href="LifeSciences.html">Life Sciences</a></li>
              <li><a href="CommunicationMedia.html">Communication & media</a></li>
              <li><a href="Manufacturing.html">Manufacturing</a></li>
              <li><a href="HighTech.html">High Tech</a></li>
              <li><a href="Retails.html">Consumer Goods & Retail</a></li>
              <li><a href="FinancialServices.html">Financial Services</a></li>
              <li><a href="ProfessionalServices.html">Professional Services</a></li>
            </ul>
          </li>
          <li>
            <a class="nav-link scrollto" href="product.html">Our Product</a>
          </li>
          <li class="dropdown">
            <a href="#About"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="./index.html#about">About us</a></li>
               <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="./index.html#team">Leadership</a></li>
              <li><a href="Career.html">Careers</a></li>
              <li><a href="CaseStudy.html">Case Study</a></li>
              <li><a href="Contact.html">Contact us</a></li>
            </ul>
          </li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
          <li>
            <a class="getstarted scrollto" href="./index.html#contact">Request Demo</a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header> `;
  }
}
class ContactCareerNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<header id="header" class="fixed-top"  >
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
        <a href="index.html"><img src="assets/img/cloudlogo.png" height="100" width="100" /></a>
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <!-- <li><a class="nav-link scrollto active" href="index.html">Home</a></li> -->

          <li class="dropdown dropDownServiceNormal">
            <a href="#Features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="serviceMenu" style="display: flex; align-items: normal !important">
              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Implementation
                </ol>
                <li class="ServiceLi">
                  <a href="SalesCloud.html">Sales Cloud</a>
                </li>
                <li class="ServiceLi">
                  <a href="ServiceCloud.html">Service Cloud</a>
                </li>
                <li class="ServiceLi"><a href="MarketingCloud.html">Marketing Cloud</a></li>
                <li class="ServiceLi"><a href="AnalyticsCloud.html">Analytics Cloud</a></li>
                <li class="ServiceLi"><a href="ExperienceCloud.html">Experience Cloud</a></li>
                <li class="ServiceLi">
                  <a href="FinancialCloud.html">Financial services Cloud</a>
                </li>
                <li class="ServiceLi"><a href="NonProfitCloud.html">Non-Profit Cloud</a></li>
                <li class="ServiceLi"><a href="SalesforcePardot.html">Salesforce Pardot</a></li>
                <li class="ServiceLi"><a href="EducationCloud.html">Education Cloud</a></li>
                <li class="ServiceLi"><a href="HealthCloud.html">Health Cloud</a></li>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Migration
                </ol>
                <li class="ServiceLi">
                  <a href="ClassicToLightningMigration.html">Classic to Lightning </a>
                </li>
                <li class="ServiceLi">
                  <a href="ThirdPartyToSalesforceMigration.html">Third-Party to Salesforce </a>
                </li>
              </div>

              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Development
                </ol>
                <li class="ServiceLi">
                  <a href="CustomCloud.html">Custom Cloud App</a>
                </li>
                <li class="ServiceLi">
                  <a href="MobileFirst.html">Mobile-First Solution</a>
                </li>
                <li class="ServiceLi">
                  <a href="AppExchange.html">AppExchange Product</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceCustomization.html">Salesforce Customization</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceConfiguration.html">Salesforce Configuration</a>
                </li>
                
                <ol style="color: black; font-weight: bold; padding-left: 13px ;cursor:pointer">
                  Support
                </ol>
                <li class="ServiceLi"><a href="ManagedServices.html">Managed Services</a></li>
                <li class="ServiceLi">
                  <a href="RemoteAdministrator.html">Remote Administrator</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceProductionSupport.html">Salesforce Production </a>
                </li>
                <li class="ServiceLi">
                  <a href="UserAdminAndManagementTraning.html">User Admin and Management</a>
                </li>
              </div>




              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Integration & Consulting
                </ol>
                <li class="ServiceLi"><a href="ERPIntegration.html">ERP </a></li>
                <li class="ServiceLi">
                  <a href="AccountingSoftwareIntegration.html">Accounting Software </a>
                </li>
                <li class="ServiceLi">
                  <a href="MarketingAutomationIntegration.html">Marketing Automation </a>
                </li>
                <li class="ServiceLi">
                  <a href="SocialMediaIntegration.html">Social Media </a>
                </li>
                <li class="ServiceLi">
                  <a href="ECommerceIntegration.html">E-Commerce </a>
                </li>
                <li class="ServiceLi"><a href="ChatbotIntegration.html">Chatbot </a></li>
                <li class="ServiceLi">
                  <a href="PaymentGatewayIntegration.html">Payment Gateway </a>
                </li>
                <li class="ServiceLi">
                  <a href="CollaborationToolsIntegration.html">Collaboration Tools </a>
                </li>
                <li class="ServiceLi">
                  <a href="CalendeEmailIntegration.html">Calender & Email </a>
                </li>
                <li class="ServiceLi"><a href="CTI.html">CTI</a></li>
                <li class="ServiceLi"><a href="ITSMIntgration.html">ITSM </a></li>
              </div>
            </ul>
          </li>

          <!-- for Mobile responsive navbar  -->
          <li class="dropdown dropDownServiceMobile">
            <a href="#Features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown">
                <a href="#"><span>Implementation</span>
                  <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="SalesCloud.html">Sales Cloud</a></li>
                  <li><a href="ServiceCloud.html">Service Cloud</a></li>
                  <li><a href="MarketingCloud.html">Marketing Cloud</a></li>
                  <li><a href="ServiceCloud.html">Service Cloud</a></li>
                  <li><a href="AnalyticsCloud.html">Analytics Cloud</a></li>
                  <li><a href="ExperienceCloud.html">Experience Cloud</a></li>
                  <li><a href="FinancialCloud.html">Financial services Cloud</a></li>
                  <li><a href="NonProfitCloud.html">Non-Profit Cloud</a></li>
                  <li><a href="SalesforcePardot.html">Salesforce Pardot</a></li>
                  <li><a href="EducationCloud.html">Education Cloud</a></li>
                  <li><a href="HealthCloud.html">Health Cloud</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Development</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="CustomCloud.html">Custom Cloud App </a></li>
                  <li><a href="MobileFirst.html">Mobile-First Solution </a></li>
                  <li><a href="AppExchange.html">AppExchange Product </a></li>
                  <li><a href="SalesforceCustomization.html">Salesforce Customization</a></li>
                  <li><a href="SalesforceConfiguration.html">Salesforce Configuration</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Migration</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ClassicToLightningMigration.html">Classic to Lightning Migration</a>
                  </li>
                  <li><a href="ThirdPartyToSalesforceMigration.html">Third-Party to Salesforce
                      Migration</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Support</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ManagedServices.html">Managed Services</a></li>
                  <li><a href="RemoteAdministrator.html">Remote Administrator</a></li>
                  <li><a href="SalesforceProductionSupport.html">Salesforce Production Support</a>
                  </li>
                  <li><a href="UserAdminAndManagementTraning.html">User Admin and Management
                      Training</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Integration and Consulting</span>
                  <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ERPIntegration.html">ERP </a></li>
                  <li><a href="AccountingSoftwareIntegration.html">Accounting Software </a>
                  </li>
                  <li><a href="MarketingAutomationIntegration.html">Marketing Automation
                    </a>
                  </li>
                  <li><a href="SocialMediaIntegration.html">Social Media </a></li>
                  <li><a href="ECommerceIntegration.html">E-Commerce </a></li>
                  <li><a href="ChatbotIntegration.html">Chatbot </a></li>
                  <li><a href="PaymentGatewayIntegration.html">Payment Gateway </a></li>
                  <li><a href="CollaborationToolsIntegration.html">Collaboration Tools
                    </a>
                  </li>
                  <li><a href="CalendeEmailIntegration.html">Calender & Email </a></li>
                  <li><a href="CTI.html">CTI</a></li>
                  <li><a href="ITSMIntgration.html">ITSM </a></li>
                </ul>
              </li>
            </ul>
          </li>
          <!-- for Mobile responsive navbar  -->

          <!-- <li><a class="nav-link scrollto" href="#team">Our Product</a></li>   -->
          <li class="dropdown">
            <a href="#Industries"><span>Industries</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="NonProfit.html">Non-Profit</a></li>
              <li><a href="Education.html">Education</a></li>
              <li><a href="Publicsector.html">Public Sector</a></li>
              <li><a href="HealthCare.html">Healthcare</a></li>
              <li><a href="LifeSciences.html">Life Sciences</a></li>
              <li><a href="CommunicationMedia.html">Communication & media</a></li>
              <li><a href="Manufacturing.html">Manufacturing</a></li>
              <li><a href="HighTech.html">High Tech</a></li>
              <li><a href="Retails.html">Consumer Goods & Retail</a></li>
              <li><a href="FinancialServices.html">Financial Services</a></li>
              <li><a href="ProfessionalServices.html">Professional Services</a></li>
            </ul>
          </li>
          <li>
            <a class="nav-link scrollto" href="product.html">Our Product</a>
          </li>
          <li class="dropdown">
            <a href="#About"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="./index.html#about">About us</a></li>
              <li><a href="./index.html#testimonials">Testimonials</a></li>

              <li><a href="./index.html#team">Leadership</a></li>
              <li><a href="Career.html">Careers</a></li>
              <li><a href="CaseStudy.html">Case Study</a></li>
              <li><a href="Contact.html">Contact us</a></li>
            </ul>
          </li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
          <li>
            <a class="getstarted scrollto" href="./index.html#contact">Request Demo</a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header> `;
  }
}
class Whatsapp_Chat extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` <div style="position: fixed;bottom: 10px;z-index: 36;right: 22px;" class="Whatsapp d-block" id="whatsapp_logo">
    <a href=" https://wa.me/918390188805?text=Hello" target="_blank"> <img src="./assets/img/Whatsapp_Logo.png" alt="Whatsapp_Logo"
        style="width: 50px;"></a>

    <!-- <i class="bi bi-whatsapp" style="color: #198754; font-size: 40px;"></i> -->

  </div>
  <script>
    addEventListener('scroll', () => {

      var scroll = $(window).scrollTop();

      if (scroll > 100) {
        $('#whatsapp_logo').removeClass("d-none");
        $('#whatsapp_logo').addClass("d-block");
      }
      else {
        $('#whatsapp_logo').removeClass("d-block");
        $('#whatsapp_logo').addClass("d-none");
      }

    });
    </script>`;
  }
}
class ShowToast extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div id="toastDiv"
    style="position:fixed; top: 80px;z-index:10000;display:none;flex-direction:column;width:100%;height:10%;align-items:center;">
    <div id="formendSuccess" class="toast"
      style="background-color: rgb(255, 255, 255);width: 25%;justify-content: center;height: 100%;border-left-style: solid;border-left-width: thick;border-left-color: #14ed25;min-width:18rem;"
      role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body" style="height:100%;display:flex;justify-content:space-between">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24"
            style="fill:#40C057;">
            <path
              d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M17.707,9.707l-7,7 C10.512,16.902,10.256,17,10,17s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L10,14.586 l6.293-6.293c0.391-0.391,1.023-0.391,1.414,0S18.098,9.316,17.707,9.707z">
            </path>
          </svg>
        </div>
        <div class="p-0">
          <strong>Success</strong>
          <div>Request Submitted</div>
        </div>
        <div></div>
        <div></div>
        <div>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"
            onclick="crossClicked()"></button>
        </div>




      </div>
    </div>



    <!-- <div id="errorDiv" style="position:fixed; top: 80px;z-index:10000;display:none;width:100%;height:11%;justify-content:center;"> -->
    <div id="formendError" class="toast"
      style="background-color: rgb(255, 255, 255);width: 25%;justify-content: center;height: 100%;border-left-style: solid;border-left-width: thick;border-left-color: #ed2214;min-width:18rem;"
      role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body" style="height:100%;display:flex;justify-content:space-between">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24"
            style="fill:#ed2214;">
            <path
              d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.707,15.293 c0.391,0.391,0.391,1.023,0,1.414C16.512,16.902,16.256,17,16,17s-0.512-0.098-0.707-0.293L12,13.414l-3.293,3.293 C8.512,16.902,8.256,17,8,17s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L10.586,12L7.293,8.707 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L12,10.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414L13.414,12L16.707,15.293z">
            </path>
          </svg>
        </div>
        <div class="p-0">
          <strong>Error Occured</strong>
          <div>Request Not Submitted</div>
        </div>
        <div></div>
        <div></div>
        <div>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"
            onclick="crossClicked()"></button>
        </div>
      </div>
    </div>
  </div>`;
  }
}
customElements.define("app-showtoast", ShowToast);
customElements.define("app-whatsapp", Whatsapp_Chat);
customElements.define("app-contactcareernavbar", ContactCareerNavbar);
customElements.define("app-header", AllNavbar);
customElements.define("app-navbar", Navbar);
customElements.define("app-testimonials", Testimonials);
customElements.define("app-footer", Footer);
