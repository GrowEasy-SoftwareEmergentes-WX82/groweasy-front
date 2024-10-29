
import { RegisterComponent } from './components/auth/register/register.component';
import { LogInComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { DevicesComponent } from './components/devices/devices.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a la ruta de login por defecto
  { path: 'home', component: HomeComponent }, // Ruta para el componente Home
  { path: 'devices', component: DevicesComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }