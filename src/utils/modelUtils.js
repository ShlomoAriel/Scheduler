export function populateModel(modelId, modelList){
	let fullModel = modelList.find( model => model._id == modelId)
	return fullModel ? fullModel : modelId
}

export function populateModelList(listWithModelId, fieldName ,modelList){
	if(!listWithModelId || !fieldName || !modelList){
		return []
	}
	return listWithModelId.map( item => {
		let newItem = {...item}
		newItem[fieldName] = populateModel(item[fieldName], modelList)
		return newItem
	})
}