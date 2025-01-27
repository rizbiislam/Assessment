let responseBody = pm.response.json();

pm.test("Verify response message is 'User exists!'", function () {
    pm.expect(responseBody.message).to.eql("User exists!");
});

pm.test("Verify response status is 200", function () {
    pm.response.to.have.status(200);
});
