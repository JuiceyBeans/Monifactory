//Does work, you just had the wrong ids

WorldgenEvents.remove(event => {
    event.removeFeatureById('underground_ores', [
        'nuclearcraft:boron_placed',
        'nuclearcraft:cobalt_placed',
        'nuclearcraft:lead_placed',
        'nuclearcraft:lithium_placed',
        'nuclearcraft:magnesium_placed',
        'nuclearcraft:platinum_placed',
        'nuclearcraft:silver_placed',
        'nuclearcraft:thorium_placed',
        'nuclearcraft:tin_placed',
        'nuclearcraft:uranium_placed',
        'nuclearcraft:zinc_placed'
    ])
})