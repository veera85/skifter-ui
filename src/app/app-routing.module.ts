import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { HtmlComponent } from './html/html.component';
import { AffiliatemarketingComponent } from './affiliatemarketing/affiliatemarketing.component';
import { AwscertifieddeveloperassociateComponent } from './awscertifieddeveloperassociate/awscertifieddeveloperassociate.component';
import { AwscloudpractitionerComponent } from './awscloudpractitioner/awscloudpractitioner.component';
import { AwssolutionarchitectComponent } from './awssolutionarchitect/awssolutionarchitect.component';
import { AwssysopsadministatorComponent } from './awssysopsadministator/awssysopsadministator.component';
import { BasiccomputerComponent } from './basiccomputer/basiccomputer.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { BlogarchiveComponent } from './blogarchive/blogarchive.component';
import { BlogsingleComponent } from './blogsingle/blogsingle.component';
import { CComponent } from './c/c.component';
import { ContentmarketingComponent } from './contentmarketing/contentmarketing.component';
import { ContentwritingComponent } from './contentwriting/contentwriting.component';
import { CourseComponent } from './course/course.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { CppComponent } from './cpp/cpp.component';
import { EcommercemarketingComponent } from './ecommercemarketing/ecommercemarketing.component';
import { EmailmarketingComponent } from './emailmarketing/emailmarketing.component';
import { Error404Component } from './error404/error404.component';
import { FacebookmarketingComponent } from './facebookmarketing/facebookmarketing.component';
import { FooterComponent } from './footer/footer.component';
import { FrontenddevelopmentComponent } from './frontenddevelopment/frontenddevelopment.component';
import { FullstackdevelopmentComponent } from './fullstackdevelopment/fullstackdevelopment.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { Ionic3Component } from './ionic3/ionic3.component';
import { JavaComponent } from './java/java.component';
import { JoomlaComponent } from './joomla/joomla.component';
import { LaptoppcserviceComponent } from './laptoppcservice/laptoppcservice.component';
import { MagentoComponent } from './magento/magento.component';
import { MsexcelComponent } from './msexcel/msexcel.component';
import { OracledbaComponent } from './oracledba/oracledba.component';
import { PayperclickComponent } from './payperclick/payperclick.component';
import { PhpComponent } from './php/php.component';
import { PythonComponent } from './python/python.component';
import { ReactjsComponent } from './reactjs/reactjs.component';
import { SeoComponent } from './seo/seo.component';
import { SocialmediamarketingComponent } from './socialmediamarketing/socialmediamarketing.component';
import { SoftwaretestingComponent } from './softwaretesting/softwaretesting.component';
import { SqlComponent } from './sql/sql.component';
import { TallyComponent } from './tally/tally.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UiuxdesignerComponent } from './uiuxdesigner/uiuxdesigner.component';
import { WebanalyticsComponent } from './webanalytics/webanalytics.component';
import { WebdesigningComponent } from './webdesigning/webdesigning.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { YoutubemarketingComponent } from './youtubemarketing/youtubemarketing.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'digitalmarketing', component:DigitalmarketingComponent},
  {path:'affiliatemarketing', component:AffiliatemarketingComponent},
  {path:'awscerifieddeveloperassociate', component:AwscertifieddeveloperassociateComponent},
  {path:'awscloudpractitioner', component:AwscloudpractitionerComponent},
  {path:'awssolutionarchitect', component:AwssolutionarchitectComponent},
  {path:'awssysopsadministrator', component:AwssysopsadministatorComponent},
  {path:'basiccomputer', component:BasiccomputerComponent},
  {path:'blockchain', component:BlockchainComponent},
  {path:'blogarchive', component:BlogarchiveComponent},
  {path:'blogsingle', component:BlogsingleComponent},
  {path:'c', component:CComponent},
  {path:'contentmarketing', component:ContentmarketingComponent},
  {path:'contentwriting', component:ContentwritingComponent},
  {path:'course', component:CourseComponent},
  {path:'coursedetail', component:CoursedetailComponent},
  {path:'cpp', component:CppComponent},
  {path:'ecommercemarketing', component:EcommercemarketingComponent},
  {path:'emailmarketing', component:EmailmarketingComponent},
  {path:'error404', component:Error404Component},
  {path:'facebookmarketing', component:FacebookmarketingComponent},
  {path:'footer', component:FooterComponent},
  {path:'frontenddevelopment', component:FrontenddevelopmentComponent},
  {path:'fullstackdevelopment', component:FullstackdevelopmentComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'header', component:HeaderComponent},
  {path:'ionic3', component:Ionic3Component},
  {path:'java', component:JavaComponent},
  {path:'joomla', component:JoomlaComponent},
  {path:'laptoppcservice', component:LaptoppcserviceComponent},
  {path:'magento', component:MagentoComponent},
  {path:'msexcel', component:MsexcelComponent},
  {path:'oracledba', component:OracledbaComponent},
  {path:'payperclick', component:PayperclickComponent},
  {path:'php', component:PhpComponent},
  {path:'python', component:PythonComponent},
  {path:'reactjs', component:ReactjsComponent},
  {path:'seo', component:SeoComponent},
  {path:'socialmediamarketing', component:SocialmediamarketingComponent},
  {path:'softwaretesting', component:SoftwaretestingComponent},
  {path:'sql', component:SqlComponent},
  {path:'tally', component:TallyComponent},
  {path:'topbar', component:TopbarComponent},
  {path:'uiuxdesigner', component:UiuxdesignerComponent},
  {path:'webanalytics', component:WebanalyticsComponent},
  {path:'webdesigning', component:WebdesigningComponent},
  {path:'webdevelopment', component:WebdevelopmentComponent},
  {path:'wordpress', component:WordpressComponent},
  {path:'youtubemarketing', component:YoutubemarketingComponent},
  {path:'html', component:HtmlComponent},
  { path:'', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
