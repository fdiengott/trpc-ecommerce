import Accordion from '~/components/ui/Accordion';
import AccordionGroup from '~/components/ui/AccordionGroup';

const Page = () => {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <aside>
                <img
                    src="placeholder.svg"
                    height="200"
                    style={{
                        aspectRatio: '300/200',
                        objectFit: 'cover',
                    }}
                    width="300"
                    alt="about us"
                />
            </aside>
            <div>
                <AccordionGroup>
                    <Accordion id="what-is" trigger="What is a Shrub?">
                        <p>
                            Shrub is a timeless process of preserving the bright
                            and fresh flavors of seasonal fruit and herbs. It is
                            a base for exquisite cocktails, gourmet soda,
                            dressings, and inspirational components in entrees
                            and sides. There are tough souls who drink it
                            straight.
                        </p>
                        <p>
                            Shrub was developed during the Colonial era, and was
                            a mainstay in New England households. It soon
                            developed into its own culinary verse. Old lore
                            tells us that it was initially used a masking flavor
                            for strong and dis-flavored whiskey and rum that was
                            shipped from England and Scotland in the 18th
                            century.
                        </p>
                        <p>
                            Shrub adds a whole new dimension to your drinks and
                            dishes. There are many health benefits to drinking
                            cider vinegar products. Shrub is alcohol free. Our
                            shrub is made from fruit, sugar, apple cider vinegar
                            and in one case, spices.
                        </p>
                        <p>
                            That’s it! Simple, time intensive worth every hour.
                        </p>
                    </Accordion>
                    <Accordion id="how-do-i-use" trigger="How do I use shrub?">
                        <p>
                            Shrub and water, club soda, tonic water for virgin
                            drinks or a pleasing non sugary soda. Tested on real
                            kids. Passed the test. Try cherry and grape. 1 oz
                            shrub to 8 oz water is a good middle balance.
                            Experiment! Start with one ounce of shrub, add your
                            alcohols, then other liquids, ice or not, and sodas.
                            See what happens. Go for rhubarb, cranberry, or sour
                            cherry to be on the tart side of life. Here are some
                            general ideas.
                        </p>
                        <p>
                            Dressings: start with your favorite dressing base,
                            do not add vinegar, instead add shrub to taste, add
                            vinegar if you need it sharper.
                        </p>
                        <p>
                            Veggie drizzle: Pour a thin stream of Raspberry
                            shrub on your steamed or roasted veggies like
                            Brussel sprouts or broccoli or even beets. Soaks:
                            Heat a small amount of shrub(lemon, cherry or pear)
                            with wine, pour it on your muffins, cakes, pancakes
                            and waffles. Let it sit 5 minutes. Eat.
                        </p>
                        <p>
                            Glazing: Bake or pan fry roasted root veggies like
                            carrots, rutabagas, turnips, potatoes, or beets.
                            spiceX, raspberry, and apple shrub. Do a stir fry,
                            taste topped with a drizzle of shrub, lemon or sour
                            cherry Smoothies and yogurt” Any of the fruit shrubs
                            give a wild taste to dairy, ½ ounce shrub per 8 oz
                            of dairy. Peach, blueberry, apple, pear, and sweet
                            cherry shrub. Did someone say frosting?
                        </p>
                        <p>
                            Bake: Any sweet bread that needs a unique flavor.
                            Shrubs act like natural extracts. You don’t need
                            much, 1 oz shrub per mini loaf of quick bread. Add
                            at the end of the bake cycle for a fresher fruity
                            flavor.
                        </p>
                    </Accordion>
                    <Accordion
                        id="what-does-cider-vinegar-do"
                        trigger="What does Cider Vinegar do for me?"
                    >
                        <p>
                            Our vinegar is certified USDA Organic made from
                            Finger Lakes grown apples, aged in oak barrels 2
                            years ( the sweet spot) and has the “mother” in it.
                            The mother is the pro-biotic culture that converts
                            complex and simple fruit sugars to vinegar. That
                            culture continues to help you digest your foods and
                            make available nutrients for optimal health.
                        </p>
                        <p>
                            Apple cider vinegar(ACV) is also a great sugar
                            uptake blocker. It does this by inhibiting the
                            enzymes that force sugar absorption. This reducing
                            how much sugar that gets into your blood and
                            storage.
                        </p>
                        <p>
                            Additionally ACV is exothermic. Meaning that once
                            ingested it is metabolized with water that creates a
                            temporary metabolic increase, burning a few more
                            stored calories.
                        </p>
                        <p>
                            Also it helps change your gut biome and lowers gut
                            Ph which helps slow sugar cravings and allows for
                            increased diversity in the digestive tract. Which
                            ultimately aids in stronger immunity response.
                        </p>
                        <p>
                            Also known ACV will help proton pumps calm down if
                            taken at the correct time reducing that awful acid
                            reflux and gerds.
                        </p>
                    </Accordion>
                    <Accordion
                        id="what-is-the-difference"
                        trigger="What is the difference between Shrubs, tonics, mixers, bitters, and health shots?"
                    >
                        <p>
                            There is no organic cane sugar in tonics. There is a
                            small amount in the Shrubs. Sugar acts as a
                            preservative and extractive so Shrubs are much more
                            fruit forward in flavor. Mixers are shrub blends
                            that have been curated a second time to enhance
                            flavors. Bitters are 50/50 vinegar and fruit or herb
                            extract with zero added sugars. Health shots are
                            smaller versions of tonics and or shrubs. ACV
                            composition by volume:
                        </p>
                        <ul>
                            <li>Tonics are 67% ACV</li>
                            <li>Shrubs are 30% ACV</li>
                            <li>Mixers are 7% ACV</li>
                            <li>Bitters/extracts are 50% ACV</li>
                        </ul>
                        <p>
                            Tonics are primarily used for the health benefits of
                            ACV with secondary health benefits of the fruit or
                            roots listed. Tonics can be taken 2 TBS every 8
                            hours or as needed per day in water. You also can
                            mix with tea or fruit juices without negative
                            effects on the tonic.
                        </p>
                        <p>
                            Shrubs can be sipped straight or diluted in any
                            liquid or used a as vinegar with the fruit flavor.
                        </p>
                        <p>
                            Bitters and extracts are extremely bitter or
                            flavorful. They add accents to any cocktail,
                            mocktail, juice, marinade or other culinary event.
                            Medicinally, bitters/extracts will stimulate
                            digestive enzyme production assist bacterial
                            digestion in your GI tract.
                        </p>
                    </Accordion>
                    <Accordion
                        id="how-drink-mixers"
                        trigger="How do I use drink mixers?"
                    >
                        <p>
                            Our Shrubby Mary(AKA Bloody Mary) drink mixers are
                            curated from whole tomatoes, whole peppers, fresh
                            onions/ garlic/and herbs. Flavors are allowed to
                            develop over time. The thickness in our Shrubby Mary
                            come from the natural pectin’s in the tomatoes and
                            peppers. It is always vegan and gluten free
                        </p>
                        <p>
                            To make a traditional Bloody Mary just pour over ice
                            and add vodka, for a Virgin Mary pour mix over ice
                            an add a little water or tomato juice.
                        </p>
                        <p>
                            Shrubby Mary can be used as a base of chili, in
                            marinara sauce or as a natural BBQ sauce.
                        </p>
                        <p>
                            Moscow Mule: is a blend of Ginger and Lime shrub. To
                            make a traditional Moscow mule just add Vodka or
                            your spirit of choice (vodka, gin, whiskey or
                            tequila) and sparkling water. (no need for ginger
                            beer and a lot less sugar)
                        </p>
                        <p>
                            Cosmo: is a blend of Cranberry, lime and orange
                            shrubs. Just add vodka and shake with ice. Add
                            Sparkling water if desired.
                        </p>
                    </Accordion>
                    <Accordion
                        id="cold-extraction"
                        trigger="Why is cold extraction important?"
                    >
                        <p>
                            If you haven’t read it already, we extract that
                            goodness of the fruit and root at under 40 degrees
                            F. Which means that heat sensitive nutrients,
                            vitamins, phenols, fruit volatiles, and anti
                            oxidants are saved in their natural and complete
                            form. This is particularly important for gingerols,
                            Vitamin C, and immune boosting anti oxidants.
                            Intense flavors and colours are also preserved. We
                            take great care in this process so you have a truly
                            useful product. We don’t add extra synthetic or
                            “natural” nutrients to bolster healthful claims.
                            It’s already in there and it’s ready for use.
                        </p>
                    </Accordion>
                    <Accordion
                        id="allergy-friendly"
                        trigger="Are your products allergy friendly?"
                    >
                        <p>
                            All of our products are free of milk, eggs, fish,
                            shellfish, animal byproducts, tree nuts and peanuts
                        </p>
                    </Accordion>
                </AccordionGroup>
            </div>
        </div>
    );
};

export default Page;
