from django.db import models

# Create your models here.
class Home(models.Model):
    exp = models.CharField('Experience Culinary Excellence')
    at = models.CharField('At Mini Restaurants, we blend traditional recipes with modern culinary techniques to create unforgettable dining experiences. Our commitment to quality ingredients and exceptional service makes every meal special.')

    def __str__(self):
        return self.exp
    class Meta:
        verbose_name = 'Home'
        verbose_name_plural = 'Homes'

class Story(models.Model):
    our1 = models.CharField('Our Story')
    img = models.ImageField('img')
    wel = models.CharField('Welcome to Mini Restaurants')
    found = models.CharField('Founded in 2008 by Chef Marco Rossi, Mini Restaurants began as a small family-owned bistro with just 12 tables. Today, we have grown into a renowned culinary destination with three locations across the city, each maintaining our original commitment to excellence')
    our2 = models.CharField('Our philosophy is simple: source the finest local ingredients, prepare them with skill and passion, and serve them in a warm, welcoming atmosphere. We believe that great food brings people together and creates lasting memories')
    fresh = models.CharField('Fresh Ingredients')
    local = models.CharField('Locally sourced, organic produce')
    award = models.CharField('Award Winning')
    star = models.CharField('5-star rated since 2015')
    season = models.CharField('Seasonal Menu')
    change = models.CharField('Changing with the seasons')
    fine = models.CharField('Fine Wines')
    curate = models.CharField('Curated wine selection')

    def __str__(self):
        return self.our1
    class Meta:
        verbose_name = 'Story'
        verbose_name_plural = 'Storys'

class Menu(models.Model):
    our3 = models.CharField('Our Menu')

    def __str__(self):
        return self.our3
    class Meta:
        verbose_name = 'Menu'
        verbose_name_plural = 'Menus'

class Specials(models.Model):
    special1 = models.CharField('Special Offers')
    limited = models.CharField('Limited time promotions and dining packages')
    weekend = models.CharField('Weekend Brunch')
    enjoy = models.CharField('Enjoy our famous weekend brunch buffet with bottomless mimosas every Saturday and Sunday from 10am to 2pm.')
    romantic = models.CharField('Romantic Dinner')
    a1 = models.CharField('A special evening for two with a 5-course tasting menu, wine pairing, and chocolate fondue dessert.')
    family1 = models.CharField('Family Feast')
    perfect1 = models.CharField('Perfect for groups of 4-6 people. Includes appetizers, main courses, desserts, and non-alcoholic beverages.')

    def __str__(self):
        return self.special1
    class Meta:
        verbose_name = 'Specials'
        verbose_name_plural = 'Specialss'

class Chefs(models.Model):
    meet = models.CharField('Meet Our Chefs')
    the1 = models.CharField('The talented culinary artists behind our exceptional dishes')
    img4 = models.ImageField('img4')
    marco = models.CharField('Marco Rossi')
    with1 = models.CharField('With over 25 years of experience, Chef Marco brings traditional Italian techniques with modern flair.')
    img5 = models.ImageField('img5')
    sofia = models.CharField('Sofia Chen')
    graduate1 = models.CharField('Graduate of Le Cordon Bleu, Chef Sofia creates exquisite desserts that are almost too beautiful to eat.')
    img6 = models.ImageField('img6')
    james = models.CharField('James Wilson')
    special1 = models.CharField('Specializing in seafood and grill, Chef James brings innovative techniques from his time in Michelin-starred kitchens.')

    def __str__(self):
        return self.meet
    class Meta:
        verbose_name = 'Chef'
        verbose_name_plural = 'Chefs'

class Reserve(models.Model):
    make = models.CharField('Make a Reservation')
    book = models.CharField('Book your table for an unforgettable dining experience')
    our4 = models.CharField('Our Locations')
    gourmet = models.CharField('123 Gourmet Street, Downtown<br>456 Culinary Avenue, Uptown<br>789 Flavor Boulevard, Waterfront')
    opening = models.CharField('Opening Hours')
    mond = models.CharField('Monday - Thursday: 11am - 10pm Friday - Saturday: 11am - 11pm Sunday: 10am - 9pm')
    contact = models.CharField('Contact Info')
    reserve = models.CharField('Reservations: (555) 123-4567 General Inquiries: info@minirestaurants.com Events: events@minirestaurants.com')

    def __str__(self):
        return self.make
    class Meta:
        verbose_name = 'Reserve'
        verbose_name_plural = 'Reserves'