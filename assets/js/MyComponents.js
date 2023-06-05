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
              DG-B-1704&05, 17th Floor, Emaar Digital Green, Golf course
              Extn. Road, Sectore-62, Gurugram, Haryana 122004
            </p>
          </div>

        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-telephone icon"></i>
          <div>
            <h4>Reservations</h4>
            <p>
              <strong>Phone:</strong> +91 124 6080 102<br>
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
              <strong>Mon-Fri: </strong>10AM - 7PM<br>
              Sun-Sat: Closed
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
            <a href="#features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="serviceMenu" style="display: flex; align-items: normal !important">
              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
                <li class="ServiceLi"><a href="CommunityCloud.html">Community Cloud</a></li>
                <li class="ServiceLi"><a href="HealthCloud.html">Health Cloud</a></li>
                <br />
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
                <br />
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
            <a href="#features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
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
                  <li><a href="CommunityCloud.html">Community Cloud</a></li>
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
            <a href="#"><span>Industries</span> <i class="bi bi-chevron-down"></i></a>
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
            <a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#team">Leadership</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="CaseStudy.html">Case Study</a></li>
              <li><a href="Contact.html">Contact us</a></li>
            </ul>
          </li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
          <li>
            <a class="getstarted scrollto" href="#contact">Request Demo</a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
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
            <a href="#features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="serviceMenu" style="display: flex; align-items: normal !important">
              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
                <br />
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
                <br />
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
                <ol style="color: black; font-weight: bold; padding-left: 13px">
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
            <a href="#features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
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
            <a href="#"><span>Industries</span> <i class="bi bi-chevron-down"></i></a>
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
            <a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="./index.html#about">About us</a></li>
              <li><a href="./index.html#team">Leadership</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="index.html">Careers</a></li>
              <li><a href="index.html">Case Study</a></li>
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
    this.innerHTML = ` <div style="position: fixed;bottom: 60px;right: 10px;z-index: 36;" class="Whatsapp d-none" id="whatsapp_logo">
    <a href="https://wa.me/918390188805" target="_blank"> <img src="./assets/img/Whatsapp_Logo.png" alt="Whatsapp_Logo"
        style="width: 50px;"></a>

    <!-- <i class="bi bi-whatsapp" style="color: #198754; font-size: 40px;"></i> -->

  </div>`;
  }
}
customElements.define("app-whatsapp", Whatsapp_Chat);
customElements.define("app-header", AllNavbar);
customElements.define("app-navbar", Navbar);
customElements.define("app-testimonials", Testimonials);
customElements.define("app-footer", Footer);
