const Page = () => {
    return (
        <div>
            <h1>About</h1>
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
                <h2>Our Story</h2>
                <p>
                    We are foodies. The interaction of simple preparations and
                    healthy outcomes deeply inspires us. Not long ago, on a
                    lonely farm road in eastern Massachusetts we discovered a
                    single bottle of strawberry shrub at a local farm stand. It
                    was love at first taste. Next came pickle school, hours of
                    research, digging deep into history, and creating plenty of
                    strange tasting liquids. Four years and 100,000 bottles
                    later we are now sharing our shrubs, tonics and mixers with
                    flavor and health enthusiasts far and wide.
                </p>
                <h2>Our Mission</h2>
                <p>
                    We set out to craft a simple healthy product made from
                    locally grown ingredients, creating a business model that
                    emphasized the agricultural strengths of our region. We
                    discovered along the way that the relationships with our
                    growers and their relationship with the amazing glacial
                    soils of the Finger Lakes is what completes this circle of
                    sustainable economy. Our apple cider vinegar is made from
                    organic apples grown in the Finger Lakes and contains ‘the
                    mother’, a protein that contains enzymes and beneficial
                    bacteria known to aid in creating and maintaining a healthy
                    gut microbiome. All of our fruits used in production are
                    sourced from local growers, aside from our citrus, which is
                    sourced from friends in Florida. Our shrubs are made with
                    your health in mind without compromising taste and their
                    versatility in cocktails (or mocktails). Shrubs add a
                    complex and tasty element when it comes to drink mixing
                    without any artificial flavors or colors typically found in
                    cocktail ‘add ons’. We hope you’ll join us experimenting
                    with new cocktail combos!
                </p>
            </div>
        </div>
    );
};

export default Page;
