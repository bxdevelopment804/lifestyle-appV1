import React, { useState } from 'react';
import SingleSquare from './shared/single-square';

const Search = () => {
  const pageIndex = [
    {
      url: 'https://img.delicious.com.au/EEJ2ozkv/del/2020/10/green-tea-noodles-with-sticky-sweet-chilli-salmon-140868-2.jpg',
      section: 'Dinner',
      title: 'Green Tea Noodles with Sticky Sweet Chili Salmon',
      description:
        'Green tea noodles bring a pop of colour to this easy midweek dinner.',
      author: 'Phoebe Wood',
    },
    {
      url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-french-toast-with-strawberries.jpg?quality=82&strip=1&resize=640%2C360',
      section: 'Dinner',
      title: 'Healthy French Toast With Strawberries',
      description:
        'When you want something a little sweet for supper, look no further than this French toast recipe.',
      author: 'David Zinczenko and Matt Goulding',
    },
    {
      url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/paleo-asian-chicken-meatballs.jpg?quality=82&strip=1&resize=640%2C360',
      section: 'Lunch',
      title: 'Asian Chicken Meatballs',
      description:
        'Get your tastebuds ready for some bold flavors we bring for a twist on a classic dish.',
      author: 'David Zinczenko and Matt Goulding',
    },
    {
      url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/Whole30-IP-Chicken-Zoodle-Soup.jpg?quality=82&strip=1&resize=640%2C360',
      section: 'Dinner',
      title: 'Instant Pot Chicken Zoodle Soup',
      description:
        'Use zucchini noodles instead of regular ones to make a gluten-free chicken noodle soup.',
      author: 'Posie Brien',
    },
    {
      url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-italian-tuna-melt.jpg?quality=82&strip=1&resize=970%2C546',
      section: 'Lunch',
      title: 'Italian Tuna Melt',
      description:
        'A new and improved version of the classic sandwich that is ready to eat in minutes.',
      author: 'David Zinczenko and Matt Goulding',
    },
    {
      url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=640%2C360',
      section: 'Lunch',
      title: 'Chicken Salad Sandwich with Curry and Raisins',
      description:
        'Who said a chicken salad needs to be drowning in mayo to be tasty?',
      author: 'David Zinczenko and Matt Goulding',
    },
    {
      url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546',
      section: 'Dinner',
      title: 'The Healthy Ultimate Burger',
      description: 'Prepare for a true, first-class burger experience.',
      author: 'David Zinczenko and Matt Goulding',
    },
    {
      url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/66822/Tex-Mex-Pita-Pizzas_WP-688x387-c.jpg',
      section: 'Plant-Based Recipes',
      title: 'Tex-Mex Pita Pizzas',
      description: 'These will satisfy your taste buds and satiate your tum.',
      author: 'Darshana Thacker',
    },
    {
      url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg',
      section: 'Plant-Based Recipes',
      title: 'Creamy Wild Rice Soup',
      description: '  It’s like a chicken noodle soup but better.',
      author: 'Carla Christian',
    },
    {
      url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/42933/Nacho-and-Baked-Potato1561-WPedit-688x387-c.jpg',
      section: 'Plant-Based Recipes',
      title: '"Nacho" Vegan Baked Potato',
      description: 'This recipe makes a great go-to meal when things are busy.',
      author: 'Andrea Duclos',
    },
    {
      url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/67930/Super-Stove-Top-Mac-and-Cheese-103068713-WP-688x387-c.jpg',
      section: 'Plant-Based Recipes',
      title: 'Stove-Top Vegan Macaroni and Cheese',
      description:
        'This classic vegan mac and cheese is ultra cheesy, saucy and creamy.',
      author: 'Molly Patrick',
    },
    {
      url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/41259/Penne-with-Tomato-Mushroom-Cream-Sauce-wp-edit-688x387-c.jpg',
      section: 'Plant-Based Recipes',
      title: 'Penne With Tomato-Mushroom Sauce',
      description:
        'Put an authentic Italian pasta dish on your dinner table in just 20 minutes.',
      author: 'Del Sroufe',
    },
    {
      url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/22661/burrito-fok-300kb-688x387-c.jpg',
      section: 'Plant-Based Recipes',
      title: 'Burritos With Spanish Rice And Black Beans',
      description:
        'Quick and easy, vegan bean and rice burritos are a perfect vegetarian dinner idea.',
      author: 'Susan Voisin',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/07/30-Minute-Beach-Workout-930x550.jpg',
      section: 'Fitness',
      title: '30-Minute Beach Workout',
      description: 'The beach is a perfect spot for a fun, functional workout.',
      author: 'Shana Verstegen',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Four-Common-Types-of-Stretches-and-When-to-do-Each-930x550.jpg',
      section: 'Fitness',
      title: 'Four Common Types of Stretches and When to do Each',
      description:
        "There's a time and place for each kind of stretch, but not all stretches are for everyone.",
      author: 'Kevin Gray',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/01/How-to-Breathe-Better-During-Cold-Weather-Running-752x472.jpg',
      section: 'Fitness',
      title: 'How to Breathe Better During Cold-Weather Running',
      description:
        "Breathing during winter runs is a struggle.  Here's how to cope.",
      author: 'Lauren Bedosky',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/06/The-One-Exercise-You-Should-Add-to-Your-Workout-Routine-3-930x550.jpg',
      section: 'Fitness',
      title: 'The One Exercise You Should Add to Your Workout Routine',
      description:
        'This technical and challenging movement is well worth learning.',
      author: 'Lauren Bedosky',
    },
    {
      url: 'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Sheet-Pan-Honey-Mustard-Chicken-3-400x500-circle.jpg',
      section: 'Meal Planning',
      title: 'Honey Dijon Chicken',
      description: 'A delicious meal that comes together in 30 minutes.',
      author: 'Taylor Stinson',
    },
    {
      url: 'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/The-best-Beef-stir-fry-5-400x500-circle.jpg',
      section: 'Meal Planning',
      title: 'Beef Stir Fry',
      description:
        'This is the EASIEST Beef Stir Fry recipe, with a 2-ingredient stir fry sauce.',
      author: 'Taylor Stinson',
    },
    {
      url: 'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Meal-Prep-Chicken-Souvlaki-Bowls-5-1-400x500-circle.jpg',
      section: 'Meal Planning',
      title: 'Chicken Souvlaki Bowls',
      description:
        "These bowls with quinoa and grilled veggies are a delicious and easy lunch idea you'll want to eat all week!",
      author: 'Taylor Stinson',
    },
    {
      url: 'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Chicken-Tandoori-Meal-Prep-Bowls-14-400x500-circle.jpg',
      section: 'Meal Planning',
      title: 'Indian Inspired Chicken Bowls',
      description:
        "These are a tasty sheet pan meal idea ready in 45 minutes – they've even got pakoras!",
      author: 'Taylor Stinson',
    },
    {
      url: 'https://thegirlonbloor.com/wp-content/uploads/2016/01/Mason-Jar-Instant-Noodle-Soups-500x500.jpg',
      section: 'Meal Planning',
      title: 'Mason Jar Instant Noodles',
      description:
        'These are the perfect on-the-go work lunch and packed full of raw veggies, quick-cook vermicelli noodles & shredded chicken!',
      author: 'Taylor Stinson',
    },
    {
      url: 'https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-3-500x500.jpg',
      section: 'Meal Planning',
      title: 'Korean Inspired Chicken Bowls',
      description:
        'These are a healthy make ahead lunch idea made up of chicken thighs, sesame coleslaw and jasmine rice!',
      author: 'Taylor Stinson',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/03/MFP-3-Day-Total-Body-Strength-Workout-featured-930x550.jpg',
      section: 'Home Workouts',
      title: '3-Day Total-Body Strength Workout',
      description: '',
      author: 'Shana Verstegen',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/02/UACF-1-Week-1-Dumbbell-Total-Body-01-930x550.jpg',
      section: 'Home Workouts',
      title: '1-Week, 1-Dumbbell Total-Body Workout',
      description: '',
      author: 'Shana Verstegen',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/01/UACF-Kettlebell-Workout-Guide-featured-01-930x550.jpg',
      section: 'Home Workouts',
      title: '1-Week, 1-Kettlebell Lower-Body Workout Guide',
      description: '',
      author: 'Shana Verstegen',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-2021-New-Year-Workout-Guide-2-featured-930x550.jpg',
      section: 'Home Workouts',
      title: 'Your Total Body (20)21 New Year Workout Guide',
      description: '',
      author: 'Shana Verstegen',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-Holiday-AMRAP-3-03-930x550.jpg',
      section: 'Home Workouts',
      title: '12 Days of Cheer: Holiday AMRAP',
      description: '',
      author: 'Shana Verstegen',
    },
    {
      url: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/UACF-1-Week-Core-Workout-Guide-01-930x550.jpg',
      section: 'Home Workouts',
      title: 'Your Quick and Easy 1-Week Core Workout Guide',
      description: '',
      author: 'Shana Verstegen',
    },
  ];

  const [searchPhrase, setSearchPhrase] = useState();
  // const updateSearchPhrase = (event) => {
  //   setSearchPhrase(event);
  //   event.preventDefault;
  //   console.log('Event: ' + { event });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${searchPhrase}`);
    // pageIndex.map(page => if(contains(page,searchPhrase) == true){
    //   alert(`Hit on ${page}`)
    // }
    // )
  };

  const filteredPages = pageIndex.filter((page) => {
    return (
      page.section.includes(searchPhrase) ||
      page.title.includes(searchPhrase) ||
      page.description.includes(searchPhrase) ||
      page.author.includes(searchPhrase)
    );
  });

  return (
    <div>
      <div>SEARCH PAGE</div>
      <form onSubmit={handleSubmit}>
        {/* <form> */}
        <label>
          Name:
          <input
            type='text'
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <div>Search Phrase: {searchPhrase}</div>
      <div>Filtered Pages: {filteredPages}</div>
    </div>
  );
};

export default Search;
