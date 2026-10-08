from django.contrib import admin
from .models import Home,Story,Menu,Specials,Chefs,Reserve
# Register your models here.
@admin.register(Home)
class HomeAdmin(admin.ModelAdmin):
    list_display = ('exp','at')

@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = ('our1','img','wel','found','our2','fresh','local','award','star','season','change','fine','curate')

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ('our3',)

@admin.register(Specials)
class SpecialsAdmin(admin.ModelAdmin):
    list_display = ('special1','limited','weekend','enjoy','romantic','a1','family1','perfect1')

@admin.register(Chefs)
class ChefsAdmin(admin.ModelAdmin):
    list_display = ('meet','the1','img4','marco','with1','img5','sofia','graduate1','img6','james','special1')

@admin.register(Reserve)
class ReserveAdmin(admin.ModelAdmin):
    list_display = ('make','book','our4','gourmet','opening','mond','contact','reserve')

