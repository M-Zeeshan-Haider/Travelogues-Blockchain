
/**
 * Sample transaction
 * @param {travelogue.addUser} addUser
 * @transaction
 */

function addUser(newUser) {
  
    var factory = getFactory(); 
    var NS='travelogue';
    var user = factory.newResource(NS,'User',newUser.user.User_ID);
    user.User_FirstName= newUser.user.User_FirstName;
    user.User_LastName= newUser.user.User_LastName;
    user.User_ProfilePic= newUser.user.User_ProfilePic;
    user.User_City= newUser.user.User_City;
    user.User_Country= newUser.user.User_Country;
    user.User_DOB= newUser.user.User_DOB;
    user.User_Gender= newUser.user.User_Gender;
    user.User_Email= newUser.user.User_Email;
    user.User_Password= newUser.user.User_Password;
    
    
    return getParticipantRegistry('travelogue.User')
        .then(function(userRegistry){
          userRegistry.addAll([user]);
    })
  }

/*  async function sampleTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('travelogue.SampleAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('travelogue', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);
}
*/
