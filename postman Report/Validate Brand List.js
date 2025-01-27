let responseBody = pm.response.json();

let brandNames = responseBody.brands.map(brand => brand.brand);

let uniqueBrands = [...new Set(brandNames)];

pm.test("Response contains Polo", function () {
    pm.expect(uniqueBrands).to.include("Polo");
});

pm.test("Response contains Babyhug", function () {
    pm.expect(uniqueBrands).to.include("Babyhug");
});

pm.test("Response contains Biba", function () {
    pm.expect(uniqueBrands).to.include("Biba");
});

pm.test("Response does not contain Heineken", function () {
    pm.expect(uniqueBrands).to.not.include("Heineken");
});

pm.test("Response does not contain BMW", function () {
    pm.expect(uniqueBrands).to.not.include("BMW");
});

pm.test("Response does not contain Razor", function () {
    pm.expect(uniqueBrands).to.not.include("Razor");
});
